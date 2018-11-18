// @flow
import { merge } from '../utils/common'

type Action = {
    type: string,
    plantingId: string,
}

export type State = {
    plantingId: ?string,
    loading: boolean,
}

const Types = {
    TOGGLE_PLANTING: 'TOGGLE_PLANTING',
}

export const togglePlanting = (plantingId: string) => {
    return {
        type: Types.TOGGLE_PLANTING,
        plantingId,
    }
}

const initialState = {
    plantingId: null,
    loading: false,
}

const plantingReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.TOGGLE_PLANTING: {
            const isSelected = action.plantingId === state.plantingId
            return merge(state, {
                plantingId: isSelected ? null : action.plantingId,
            })
        }
        default:
            return state
    }
}

export default plantingReducer
