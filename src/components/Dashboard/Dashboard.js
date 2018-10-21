// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Button } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { getGarden, deleteGarden } from '../../redux/garden'
import { onCreateGarden } from '../../graphql/subscriptions'
import { listGardens } from '../../graphql/queries'

const GardenCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GardenCard = styled.div`
    min-width: 300px;
    border: 1px solid #00000030;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #00000030;
    padding: 20px;
`
const GardenTitle = styled.h3``

type Props = {
    user: any,
    getGarden: string => void,
    deleteGarden: string => void,
    history: any,
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
        history.push('/home/start')
    }

    renderGardenItem = garden => {
        return (
            <GardenCard key={garden.id}>
                <GardenTitle>{garden.name}</GardenTitle>
                <p>{garden.location}</p>
                <p>{`${garden.length}' x ${garden.width}'`}</p>
                <Button.Group fluid>
                    <Button primary onClick={this.handleGardenClick(garden)}>
                        {'Details'}
                    </Button>
                    <Button secondary onClick={this.handleGardenDelete(garden)}>
                        {'Delete'}
                    </Button>
                </Button.Group>
            </GardenCard>
        )
    }

    renderGardenCard = gardens => {
        return gardens.sort(byName).map(this.renderGardenItem)
    }

    render() {
        const { user } = this.props
        if (!user) {
            return null
        }
        return (
            <Container>
                <h1>{`Hello ${user.firstName} ${user.lastName}`}</h1>
                <h2>{'Gardens'}</h2>
                <GardenCardContainer>
                    <Connect
                        query={graphqlOperation(listGardens)}
                        subscription={graphqlOperation(onCreateGarden)}
                        subscriptionMsg={this.onNewGarden}>
                        {({ data }) => {
                            if (!data.listGardens) {
                                return null
                            }
                            return this.renderGardenCard(data.listGardens.items)
                        }}
                    </Connect>
                </GardenCardContainer>
                <Button onClick={this.handleNewGardenClick}>
                    {'Add New Garden'}
                </Button>
            </Container>
        )
    }
}

const mapState = state => {
    return {
        user: state.auth.profile,
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
