import { schema } from 'normalizr'
import { garden } from './garden'
import { planting, update } from './planting'

export const bed = new schema.Entity('bed', {
    garden,
    updates: { items: [ update ]},
    plantings: { items: [ planting ]}
})