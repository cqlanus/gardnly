// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Grid, Menu, Button, Loader } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import Bed from './Bed'
import CropSidebar from '../CropSidebar/CropSidebar'
import { selectBed } from '../../redux/bed'
import { getCrops } from '../../redux/crop'
import { getGardenBeds } from '../../customgql/queries'
import { createBedFactory } from '../../data/bed'

type Props = {
    beds: Array<*>,
    selectedBed: any,
    history: any,
    selectBed: any => void,
    getCrops: () => void,
    crops: Array<*>,
    garden: any,
    loading: boolean,
}

type State = {
    plantsVisible: boolean,
    beds: ?Array<*>,
}

class PlanBedPage extends Component<Props, State> {
    state = {
        plantsVisible: false,
        beds: null,
    }

    componentDidMount() {
        const { history, garden, getCrops } = this.props
        getCrops()
        !garden && history.push('/home')
    }

    toggleCrops = () => {
        this.setState(p => ({ plantsVisible: !p.plantsVisible }))
    }

    handleTabClick = (bed: Bed) => () => {
        const { selectBed } = this.props
        selectBed(bed)
    }

    renderTabs = beds => {
        const { selectedBed } = this.props
        return beds.map((bed, idx) => {
            const isActive = selectedBed && selectedBed.id === bed.id
            return (
                <Menu.Item
                    key={bed.id}
                    name={bed.name}
                    active={isActive}
                    onClick={this.handleTabClick(bed)}
                />
            )
        })
    }

    renderTabBar = () => {
        const { garden } = this.props
        if (!garden) {
            return null
        }
        const id = garden.id
        return (
            <Menu fluid tabular vertical>
                <Connect query={graphqlOperation(getGardenBeds, { id })}>
                    {({ data }) => {
                        if (!data.getGarden) {
                            return null
                        }
                        const beds = data.getGarden.beds.items.map(
                            createBedFactory,
                        )
                        return this.renderTabs(beds)
                    }}
                </Connect>
            </Menu>
        )
    }

    render() {
        const { selectedBed, crops, loading } = this.props
        const { plantsVisible } = this.state
        const buttonText = plantsVisible ? 'Hide Crops' : 'Show Crops'
        return (
            <div>
                <Loader active={loading} />

                <Grid padded>
                    <Grid.Column stretched width={2}>
                        {this.renderTabBar()}
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Bed bed={selectedBed} />
                    </Grid.Column>
                    <CropSidebar visible={plantsVisible} crops={crops} />
                </Grid>
                <Button onClick={this.toggleCrops}>{buttonText}</Button>
            </div>
        )
    }
}

const mapState = state => {
    const { beds, selectedBed, loading } = state.bed
    const { crops } = state.crop
    const { currentGarden: garden } = state.garden
    return {
        beds,
        selectedBed,
        crops,
        garden,
        loading,
    }
}

const mapDispatch = {
    selectBed,
    getCrops,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
