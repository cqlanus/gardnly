// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Button, Menu } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { getGarden, deleteGarden } from '../../redux/garden'
import { onCreateGarden } from '../../graphql/subscriptions'
import { listGardens } from '../../graphql/queries'
import GardenDetails from '../GardenDetails/GardenDetails'

const MainContainer = styled(Container)`
    height: 100%;
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
`

const ForecastContainer = styled.div`
    grid-area: forecast;
    background-color: steelblue;
`
const AlmanacContainer = styled.div`
    grid-area: almanac;
    background-color: goldenrod;
`

const PlantsContainer = styled.div`
    grid-area: plants;
    background-color: #00000010;
`

type Props = {
    user: any,
    garden: any,
    getGarden: string => void,
    deleteGarden: string => void,
    history: any,
    loading: boolean,
}

const byName = (a, b) => {
    const aVal = a.name.toUpperCase()
    const bVal = b.name.toUpperCase()
    const greater = aVal > bVal
    const less = aVal < bVal
    return greater ? 1 : less ? -1 : 0
}

class Dashboard extends Component<Props> {
    onNewGarden = (prevQuery, newData) => {
        console.log({ newData })
        let updated = { ...prevQuery }
        updated.listGardens.items = [
            ...updated.listGardens.items,
            newData.onCreateGarden,
        ]
        return updated
    }

    handleGardenClick = (garden: any) => () => {
        const { getGarden } = this.props
        getGarden(garden.id)
    }

    handleGardenDelete = (garden: any) => () => {
        const { deleteGarden } = this.props
        deleteGarden(garden.id)
    }

    handleNewGardenClick = () => {
        const { history } = this.props
        history.push('/home/addGarden')
    }

    renderGardenItem = garden => {
        return (
            <Menu.Item
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
        const { user, garden, loading } = this.props
        if (!user) {
            return null
        }
        return (
            <MainContainer>
                <h1>{`Hello ${user.firstName} ${user.lastName}`}</h1>
                <h2>{'Gardens'}</h2>
                <Main>
                    <GardenCardContainer>
                        <Button
                            primary
                            fluid
                            onClick={this.handleNewGardenClick}>
                            {'Add New Garden'}
                        </Button>
                        <Connect
                            query={graphqlOperation(listGardens)}
                            subscription={graphqlOperation(onCreateGarden)}
                            subscriptionMsg={this.onNewGarden}>
                            {({ data }) => {
                                if (!data.listGardens) {
                                    return null
                                }
                                return this.renderGardenCards(
                                    data.listGardens.items,
                                )
                            }}
                        </Connect>
                        <GardenDetails garden={garden} loading={loading} />
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
        user: state.auth.profile,
        garden: state.garden.currentGarden,
        loading: state.garden.loading,
    }
}

const mapDispatch = {
    getGarden,
    deleteGarden,
}

export default connect(
    mapState,
    mapDispatch,
)(Dashboard)
