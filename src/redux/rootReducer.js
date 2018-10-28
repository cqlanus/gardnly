import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import garden from './garden'
import auth from './auth'
import bed from './bed'
import crop from './crop'

const rootReducer = combineReducers({ garden, bed, crop, auth, toastr })
export default rootReducer
