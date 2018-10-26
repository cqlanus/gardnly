// @flow
import React, { Component } from 'react'
import { Loader, Button, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import styled from 'styled-components'
import { GARDEN_LOCATION } from '../../data/garden'

const GardenDetailsContainer = styled.div`
    flex: 1;
    height: 100%;
    border: 1px solid #00000020;
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

type Detail = { title: string, value: string }

type Props = {
    garden: any,
    loading: boolean,
}

class GardenDetails extends Component<Props> {
    renderBeds = (beds: { items: Array<*> }) => {
        const hasBeds = beds.items.length > 0
        return (
            <div>
                <Header as={'h3'}>{'Garden Beds'}</Header>
                <Segment.Group>
                    {hasBeds ? (
                        beds.items.map(bed => (
                            <Segment key={bed.id}>{bed.name}</Segment>
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
        const { garden } = this.props
        if (!garden) {
            return null
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
                <GardenDetailsContainer>
                    <TitleRow>
                        <Header as={'h2'}>{garden.name}</Header>
                        <Button size={'tiny'}>{'Edit'}</Button>
                    </TitleRow>
                    {this.renderDetails(details)}
                    {this.renderBeds(garden.beds)}
                </GardenDetailsContainer>
                <ButtonContainer>
                    <Button.Group attached={'bottom'} fluid>
                        <Button as={Link} to={'/home/addGarden/bed'}>
                            {'Add Bed'}
                        </Button>
                        <Button>{'Place Beds'}</Button>
                    </Button.Group>
                </ButtonContainer>
            </div>
        )
    }

    render() {
        const { loading, garden } = this.props
        return (
            <Main garden={garden}>
                {this.renderGarden()}
                <Loader active={loading} inline />
            </Main>
        )
    }
}

export default GardenDetails
