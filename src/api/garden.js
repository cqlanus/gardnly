// @flow
import type { Garden } from '../data/garden'
import { API, graphqlOperation } from 'aws-amplify'
import { getGarden } from '../customgql/queries'
import { listGardens } from '../customgql/queries'
import {
    createGarden,
    deleteGarden as gardenDelete,
    updateGarden,
} from '../graphql/mutations'
import { now } from '../utils/common'


class GardenService {

    get = async (id: string) => {
        const { data } = await API.graphql(graphqlOperation(getGarden, { id }))
        return data.getGarden
    }

    getAll = async () => {
        const { data } = await API.graphql(graphqlOperation(listGardens))
        return data.listGardens.items
    }

    create = async (garden: Garden, gardenUserId: string) => {
        const input = { ...garden, gardenUserId, created: now() }
        const { data } = await API.graphql(
            graphqlOperation(createGarden, { input }),
        )
        return data.createGarden
    }

    delete = async (id: string) => {
        const input = { id }
        await API.graphql(graphqlOperation(gardenDelete, { input }))
    }

    update = async (id: string, garden: Garden) => {
        const input = { id, ...garden }
        const { data } = await API.graphql(
            graphqlOperation(updateGarden, { input }),
                )
        return data.updateGarden
    }
}

export default GardenService