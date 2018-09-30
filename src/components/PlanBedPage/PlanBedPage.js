// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Grid, Menu } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Images from '../../resources/Images'
import Crop from './Crop'
import Bed from './Bed'
import { selectBed } from '../../redux/garden'

type Props = {
    beds: Array<*>,
    selectedBed: *,
    selectBed: any => void,
}

class PlanBedPage extends Component<Props> {
    handleTabClick = (bed: Bed) => () => {
        const { selectBed } = this.props
        selectBed(bed)
    }

    renderTabs = () => {
        const { beds, selectedBed } = this.props

        return beds.map(bed => {
            const isActive = selectedBed.id === bed.id
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
        return (
            <Menu attached="top" tabular>
                {this.renderTabs()}
            </Menu>
        )
    }

    render() {
        const { selectedBed } = this.props
        return (
            <div>
                <Grid padded>
                    {this.renderTabBar()}
                    <Grid.Column>
                        <Bed bed={selectedBed} />
                    </Grid.Column>
                </Grid>
                <Crop cropName={'beet'} cropImg={Images.beet} numPerSqFt={1} />
                <Crop
                    cropName={'strawberry'}
                    cropImg={Images.strawberry}
                    numPerSqFt={9}
                />
            </div>
        )
    }
}

const mapState = state => {
    const { beds, selectedBed } = state.garden
    return {
        beds,
        selectedBed,
    }
}

const mapDispatch = {
    selectBed,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
