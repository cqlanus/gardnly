// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Button, Modal, Menu } from 'semantic-ui-react'
import { getGardenComplete, deleteGarden, getGardens } from '../../redux/garden'
import { selectUser, selectGarden, selectGardens } from '../../selectors'
import GardenDetails from './GardenDetails'
import AddGardenForm from './AddGardenForm'

const MainContainer = styled(Container)`
    height: 100%;
    margin-bottom: 50px;
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

type Props = {
    user: any,
    garden: any,
    gardens: Array<*>,
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
            <Menu attached={'top'}>
                {gardens.sort(byName).map(this.renderGardenItem)}
            </Menu>
        )
    }

    render() {
        const { user, garden, gardens } = this.props
        if (!user) {
            return null
        }
        return (
            <MainContainer>
                <h1>{`Hello ${user.firstName} ${user.lastName}`}</h1>
                <h2>{'Gardens'}</h2>
                <Main>
                    <GardenCardContainer>
                        <Modal
                            trigger={
                                <Button fluid primary>
                                    {'Add New Garden'}
                                </Button>
                            }>
                            <ModalContent>
                                <AddGardenForm />
                            </ModalContent>
                        </Modal>
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
