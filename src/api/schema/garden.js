import { schema } from 'normalizr'
import { user } from './user'
import { bed } from './bed'

export const garden = new schema.Entity('garden', {
    user,
    beds: { items: [bed]}
})