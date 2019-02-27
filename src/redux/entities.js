// @flow
import merge from 'lodash/merge'

type Action = {
    type: string,
    entities: any,
}

type State = {}

const Types = {
    UPDATE_ENTITIES: 'UPDATE_ENTITIES',
}

export const updateEntities = entities => {
    return {
        type: Types.UPDATE_ENTITIES,
        entities,
    }
}

const initialState = {}

const entitiesReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.UPDATE_ENTITIES: {
            return merge(state, action.entities)
        }

        default:
            return state
    }
}

export default entitiesReducer