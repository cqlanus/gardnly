// @flow
import type { Garden } from '../data/garden'
import type { Bed, BedUpdate } from '../data/bed'
import { API, graphqlOperation } from 'aws-amplify'
import { createBed, deleteBed, updateBed } from '../graphql/mutations'
import {
    createBedUpdate,
} from '../customgql/mutations'
import { now } from '../utils/common'
import { bedGenerator } from '../utils/api'

class BedService {

    create = async (bed: Bed, bedGardenId: string, idx: number) => {
        const input = {
            ...bed,
            name: `Test bed ${idx}`,
            created: now(),
            bedGardenId,
        }
        const { data } = await API.graphql(graphqlOperation(createBed, { input }))
        return data.createBed
    }

    delete = async (id: string) => {
        const input = { id }
        await API.graphql(graphqlOperation(deleteBed, { input }))
    }

    update = async (bed: Bed) => {
        const { id, x, y, hasDropped, invert } = bed
        const input = { id, x, y, hasDropped, invert }
        const { data } = await API.graphql(
            graphqlOperation(updateBed, { input }),
        )
        return data.updateBed
    }

    addUpdate = async (update: BedUpdate, { id: bedUpdateBedId, name }: Bed, { id: bedUpdateGardenId }: Garden) => {
        const input = { ...update, bedUpdateBedId, bedUpdateGardenId }
        const { data } = await API.graphql(
            graphqlOperation(createBedUpdate, { input })
        )
        let { bed: newBed } = data.createBedUpdate
        return bedGenerator(newBed, {name})
    }
}

export default BedService