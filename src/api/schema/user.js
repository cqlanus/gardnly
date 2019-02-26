import { schema } from 'normalizr'
import { garden } from './garden'

export const user = new schema.Entity('user', {
    gardens: { items: [ garden ]}
})