import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import garden from './garden'
import auth from './auth'
import bed from './bed'
import crop from './crop'
import planting from './planting'
import entities from './entities'

const rootReducer = combineReducers({
    garden,
    bed,
    crop,
    planting,
    auth,
    toastr,
    entities,
})
export default rootReducer
