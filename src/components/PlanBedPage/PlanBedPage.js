// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Images from '../../resources/Images'
import Crop from './Crop'
import Bed from './Bed'

type Props = {}

class PlanBedPage extends Component<Props> {
    render() {
        return (
            <div>
                <Grid padded>
                    <h1>PlanBedPage</h1>
                    <Grid.Row>
                        <Grid.Column>
                            <Bed length={4} width={14} />
                        </Grid.Column>
                    </Grid.Row>
                    <div />
                </Grid>
                <Crop cropName={'beet'} cropImg={Images.beet} numPerSqFt={1} />
                <Crop
                    cropName={'strawberry'}
                    cropImg={Images.strawberry}
                    numPerSqFt={36}
                />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(PlanBedPage)
