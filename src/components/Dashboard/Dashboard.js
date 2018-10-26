// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Button, Segment } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { format } from 'date-fns'
import { getGarden, deleteGarden } from '../../redux/garden'
import { onCreateGarden } from '../../graphql/subscriptions'
import { listGardens } from '../../graphql/queries'
import GardenDetails from '../GardenDetails/GardenDetails'

const Main = styled.div`
    display: flex;
`

const GardenCardContainer = styled.div`
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-right: 20px;
    flex: 1;
`

const GardenCard = styled(Segment)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: 2px 2px 5px #00000020;
    }
`

const GardenTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
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
        const date = format(new Date(garden.created), 'MMM D, YYYY')
        return (
            <GardenCard
                key={garden.id}
                onClick={this.handleGardenClick(garden)}>
                <GardenTitle>{garden.name}</GardenTitle>
                <div>{`created: ${date}`}</div>
            </GardenCard>
        )
    }

    renderGardenCards = gardens => {
        return gardens.sort(byName).map(this.renderGardenItem)
    }

    render() {
        const { user, garden, loading } = this.props
        if (!user) {
            return null
        }
        return (
            <Container>
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
                    </GardenCardContainer>
                    <GardenDetails garden={garden} loading={loading} />
                </Main>
            </Container>
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
