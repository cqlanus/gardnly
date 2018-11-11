// @flow
import type { Bed } from '../../data/bed'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    Loader,
    Button,
    Header,
    Segment,
    Image,
    Modal,
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import styled from 'styled-components'
import AddBedForm from './AddBedForm'
import AddGardenForm from './AddGardenForm'
import { GARDEN_LOCATION } from '../../data/garden'
import { getGarden } from '../../redux/garden'
import { removeBed } from '../../redux/bed'
import { isBedLoading, isGardenLoading } from '../../selectors'

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

const CropIconContainer = styled.div`
    display: flex;
`

const ModalContent = styled.div`
    padding: 20px;
`

type Detail = { title: string, value: string }

type Props = {
    history: any,
    garden: any,
    loading: boolean,
    removeBed: Bed => void,
    getGarden: (string, any) => void,
}

class GardenDetails extends Component<Props> {
    handleRemoveBed = bed => () => {
        const { removeBed } = this.props
        removeBed(bed)
    }

    handleEditGarden = garden => () => {
        const { garden, history } = this.props
        history.push('/home/new_garden', { garden, isEditing: true })
    }

    handleGetBeds = gardenId => () => {
        const { history, getGarden } = this.props
        getGarden(gardenId, { history })
    }

    renderCropIcons = (crop: any) => {
        return <Image key={crop.id} src={crop.image} avatar />
    }

    renderBedItem = (bed, idx) => {
        const items = bed.plantings ? bed.plantings.items : []
        const plantingsMap = items.reduce((acc, { crop }) => {
            acc[crop.commonName] = crop
            return acc
        }, {})
        const plantings = Object.values(plantingsMap)
        return (
            <BedSegment key={bed.id}>
                <div>{idx + 1}</div>
                <CropIconContainer>
                    {plantings.map(this.renderCropIcons)}
                </CropIconContainer>
                <Button onClick={this.handleRemoveBed(bed)} size={'mini'}>
                    {'Delete'}
                </Button>
            </BedSegment>
        )
    }

    renderBeds = (beds: { items: Array<*> }) => {
        const hasBeds = beds.items.length > 0
        return (
            <div>
                <Header as={'h3'}>{'Garden Beds'}</Header>
                <Segment.Group>
                    {hasBeds ? (
                        beds.items.map(this.renderBedItem)
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
                    <Loader active={loading} />
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
                        <Modal
                            trigger={<Button size={'tiny'}>{'Edit'}</Button>}>
                            <ModalContent>
                                <AddGardenForm garden={garden} />
                            </ModalContent>
                        </Modal>
                    </TitleRow>
                    {this.renderDetails(details)}
                    {this.renderBeds(garden.beds)}
                </GardenDetailsContainer>
                <ButtonContainer>
                    <Button.Group attached={'bottom'} fluid>
                        <Modal trigger={<Button>{'Add Beds'}</Button>}>
                            <ModalContent>
                                <AddBedForm />
                            </ModalContent>
                        </Modal>
                        <Button onClick={this.handleGetBeds(garden.id)}>
                            {'Plant Beds'}
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

const mapState = state => {
    const gardenLoading = isGardenLoading(state)
    const bedLoading = isBedLoading(state)
    return {
        loading: bedLoading || gardenLoading,
    }
}

const mapDispatch = {
    removeBed,
    getGarden,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withRouter,
)(GardenDetails)
