// @flow
import type { User } from '../../data/auth'
import type { Garden } from '../../data/garden'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Button, Modal, Menu } from 'semantic-ui-react'
import { getGardenComplete, deleteGarden, getGardens } from '../../redux/garden'
import { selectUser, selectGarden, selectGardens } from '../../selectors'
import GardenDetails from './GardenDetails'
import AddGardenForm from './AddGardenForm'
import Strings from '../../resources/Strings'

const MainContainer = styled(Container)`
    height: 100%;
    margin: 20px 0;
`

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 300px;
    grid-template-areas:
        'garden garden reminder'
        'forecast almanac plants';
    grid-gap: 20px;
    height: 100%;
`

const GardenCardContainer = styled.div`
    grid-area: garden;
`

const RemindersContainer = styled.div`
    grid-area: reminder;
    background-color: indianred;
    opacity: 0.2;
`

const ForecastContainer = styled.div`
    grid-area: forecast;
    background-color: steelblue;
    opacity: 0.2;
`
const AlmanacContainer = styled.div`
    grid-area: almanac;
    background-color: goldenrod;
    opacity: 0.2;
`

const PlantsContainer = styled.div`
    grid-area: plants;
    background-color: seagreen;
    opacity: 0.2;
`
const ModalContent = styled.div`
    padding: 20px;
`

const TopRow = styled.div`
    display: flex;
`

const Title = styled.h2`
    display: inline-block;
    flex: 2;
`
const ModalContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

type Props = {
    user: User,
    garden: Garden,
    gardens: Array<Garden>,
    getGarden: string => void,
    getGardens: () => void,
    deleteGarden: string => void,
    history: any,
    match: any,
}

const byName = (a, b) => {
    const aVal = a.name.toUpperCase()
    const bVal = b.name.toUpperCase()
    const greater = aVal > bVal
    const less = aVal < bVal
    return greater ? 1 : less ? -1 : 0
}

class Dashboard extends Component<Props> {
    componentDidMount() {
        const { getGardens } = this.props
        getGardens()
    }

    onNewGarden = (prevQuery, newData) => {
        let updated = { ...prevQuery }
        updated.listGardens.items = [
            ...updated.listGardens.items,
            newData.onCreateGarden,
        ]
        return updated
    }

    handleGardenClick = (garden: any) => () => {
        const { getGarden } = this.props
        getGarden(garden)
    }

    handleGardenDelete = (garden: any) => () => {
        const { deleteGarden } = this.props
        deleteGarden(garden.id)
    }

    handleNewGardenClick = () => {
        const { history } = this.props
        history.push('/home/new_garden')
    }

    renderGardenItem = garden => {
        const { garden: currentGarden } = this.props
        const isActive = garden.id === currentGarden.id
        return (
            <Menu.Item
                active={isActive}
                name={garden.name}
                key={garden.id}
                onClick={this.handleGardenClick(garden)}
            />
        )
    }

    renderGardenCards = gardens => {
        return (
            <Menu secondary pointing>
                {gardens.sort(byName).map(this.renderGardenItem)}
            </Menu>
        )
    }

    renderTopRow = () => {
        return (
            <TopRow>
                <Title>{'My Gardens'}</Title>
                <ModalContainer>
                    <Modal
                        trigger={
                            <Button size={'tiny'} primary>
                                {Strings.addNewGarden}
                            </Button>
                        }>
                        <ModalContent>
                            <AddGardenForm />
                        </ModalContent>
                    </Modal>
                </ModalContainer>
            </TopRow>
        )
    }

    render() {
        const { user, garden, gardens } = this.props
        if (!user) {
            return null
        }
        return (
            <MainContainer>
                <Main>
                    <GardenCardContainer>
                        {this.renderTopRow()}
                        {this.renderGardenCards(gardens)}
                        <GardenDetails garden={garden} />
                    </GardenCardContainer>
                    <RemindersContainer />
                    <ForecastContainer />
                    <AlmanacContainer />
                    <PlantsContainer />
                </Main>
            </MainContainer>
        )
    }
}

const mapState = state => {
    return {
        user: selectUser(state),
        garden: selectGarden(state),
        gardens: selectGardens(state),
    }
}

const mapDispatch = {
    getGarden: getGardenComplete,
    getGardens,
    deleteGarden,
}

export default connect(
    mapState,
    mapDispatch,
)(Dashboard)
