// @flow
import { updateEntities } from '../entities'

export const entitiesMiddleWare = store => next => action => {
    
    if (action.entities) {
        next(updateEntities(action.entities))
    }

    return next(action)
}