// @flow
import type { Bed, CropPosition } from '../data/bed'
import { createBedFactory } from '../data/bed'
import { now } from './common'

export const createCropInput = (crop: any, position: CropPosition, bed: Bed) => {
    const { row, column } = position
    const { id: plantingCropId } = crop
    const { id: plantingBedId } = bed
    return {
        row,
        column,
        plantingBedId,
        plantingCropId,
        created: now(),
    }
}

export const bedGenerator = (newBed: Bed, { name }: {name: string}) => {
    const namedBed = { ...newBed, name }
    return createBedFactory(namedBed)
}