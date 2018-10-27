// @flow
import type { Bed } from '../../data/bed'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Loader, Button, Header, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import styled from 'styled-components'
import { GARDEN_LOCATION } from '../../data/garden'
import { removeBed } from '../../redux/garden'

const GardenDetailsContainer = styled(Segment)`
    flex: 1;
    height: 100%;
    min-height: 300px;
    border-top: 0;
    padding: 20px;
`

const Main = styled.div`
    flex: 1;
    background-color: ${({ garden }) => (garden ? '#fff' : '#00000010')};
`

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonContainer = styled.div`
    align-self: flex-end;
`

const DetailSegment = styled(Segment)`
    display: flex;
    flex-direction: column
    align-items: center;
`

const BedSegment = styled(Segment)`
    display: flex;
    justify-content: space-between;
`

type Detail = { title: string, value: string }

type Props = {
    history: any,
    garden: any,
    loading: boolean,
    removeBed: Bed => void,
}

class GardenDetails extends Component<Props> {
    handleRemoveBed = bed => () => {
        const { removeBed } = this.props
        removeBed(bed)
    }

    handleEditGarden = garden => () => {
        const { garden, history } = this.props
        history.push('/home/addGarden', { garden, isEditing: true })
    }

    renderBeds = (beds: { items: Array<*> }) => {
        const hasBeds = beds.items.length > 0
        return (
            <div>
                <Header as={'h3'}>{'Garden Beds'}</Header>
                <Segment.Group>
                    {hasBeds ? (
                        beds.items.map((bed, idx) => (
                            <BedSegment key={bed.id}>
                                <div>{idx + 1}</div>
                                <Button
                                    onClick={this.handleRemoveBed(bed)}
                                    size={'mini'}>
                                    {'Delete'}
                                </Button>
                            </BedSegment>
                        ))
                    ) : (
                        <Segment>no beds</Segment>
                    )}
                </Segment.Group>
            </div>
        )
    }

    renderDetail = ({ title, value }: Detail, idx: number) => {
        return (
            <DetailSegment key={idx}>
                <Header as={'h4'}>{title}</Header>
                <div>{value}</div>
            </DetailSegment>
        )
    }

    renderDetails = (details: Array<Detail>) => {
        return (
            <div>
                <Header as={'h3'}>{'Garden Details'}</Header>
                <Segment.Group horizontal>
                    {details.map(this.renderDetail)}
                </Segment.Group>
            </div>
        )
    }

    renderGarden = () => {
        const { garden, loading } = this.props
        if (!garden) {
            return (
                <GardenDetailsContainer attached={'bottom'}>
                    <Loader active={loading} inline={'centered'} />
                </GardenDetailsContainer>
            )
        }
        const location = GARDEN_LOCATION[garden.location]
        const dimensions = `${garden.length}ft x ${garden.width}ft`
        const date = format(new Date(garden.created), 'MMM D, YYYY')

        const details = [
            { title: 'Location', value: location },
            { title: 'Dimensions', value: dimensions },
            { title: 'Created', value: date },
        ]

        return (
            <div>
                <GardenDetailsContainer attached>
                    <Loader active={loading} />
                    <TitleRow>
                        <Header as={'h2'}>{garden.name}</Header>
                        <Button
                            onClick={this.handleEditGarden(garden)}
                            size={'tiny'}>
                            {'Edit'}
                        </Button>
                    </TitleRow>
                    {this.renderDetails(details)}
                    {this.renderBeds(garden.beds)}
                </GardenDetailsContainer>
                <ButtonContainer>
                    <Button.Group attached={'bottom'} fluid>
                        <Button as={Link} to={'/home/addGarden/bed'}>
                            {'Add Bed'}
                        </Button>
                        <Button>{'Arrange Beds'}</Button>
                    </Button.Group>
                </ButtonContainer>
            </div>
        )
    }

    render() {
        const { garden } = this.props
        return <Main garden={garden}>{this.renderGarden()}</Main>
    }
}

const mapDispatch = {
    removeBed,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withRouter,
)(GardenDetails)
