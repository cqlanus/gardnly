// @flow
import type { Garden } from '../../data/garden'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import PlannerSpace from './PlannerSpace'
import { getGarden } from '../../redux/garden'
import { selectGarden } from '../../selectors'

type Props = {
    getGarden: string => void,
    match: any,
    garden: Garden,
}

class PlanGardenPage extends Component<Props> {
    componentDidMount() {
        const { getGarden, match } = this.props
        const {
            params: { gardenId },
        } = match
        gardenId && getGarden(gardenId)
    }

    render() {
        const { garden } = this.props
        if (!garden) {
            return null
        }
        return (
            <Grid centered padded>
                <Grid.Column>
                    <PlannerSpace garden={garden} />
                </Grid.Column>
            </Grid>
        )
    }
}

const mapState = state => {
    return {
        garden: selectGarden(state),
    }
}

const mapDispatch = {
    getGarden,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanGardenPage)
