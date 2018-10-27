import {combineReducers} from 'redux'
import orderReducer from '../reducers/orderReducer'

export default combineReducers({
    orders: orderReducer
})