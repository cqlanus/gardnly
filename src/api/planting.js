// @flow
import type { Bed, CropPosition } from '../data/bed'
import { API, graphqlOperation } from 'aws-amplify'
import {
    createPlanting,
    deletePlanting,
    updatePlanting,
} from '../customgql/mutations'
import { createCropInput, bedGenerator } from '../utils/api'

class PlantingService {
    create = async (crop: any, position: CropPosition, bed: Bed) => {
        const input = createCropInput(crop, position, bed)
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(createPlanting, { input, limit }),
        )
        let { bed: newBed } = data.createPlanting
        return bedGenerator(newBed, bed)
    }

    delete = async (plantingId: string, bed: Bed) => {
        const input = { id: plantingId }
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(deletePlanting, { input, limit }),
        )
        let { bed: newBed } = data.deletePlanting
        return bedGenerator(newBed, bed)
    }

    position = async (plantingId: string, newPosition: CropPosition, bed: Bed) => {
        const { row, column } = newPosition
        const input = { id: plantingId, row, column }
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(updatePlanting, { input, limit }),
        )
        let { bed: newBed } = data.updatePlanting
        return bedGenerator(newBed, bed)
    }

    update = async (input: any, bed: Bed) => {
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(updatePlanting, { input, limit }),
        )
        let { bed: newBed } = data.updatePlanting
        return bedGenerator(newBed, bed)
    }

}

export default PlantingService