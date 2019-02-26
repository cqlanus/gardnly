import { schema } from 'normalizr'
import { bed } from './bed'

const crop = new schema.Entity('crop')

export const planting = new schema.Entity('planting', {
    bed,
    crop,
})

export const update = new schema.Entity('update', {
    bed
})
