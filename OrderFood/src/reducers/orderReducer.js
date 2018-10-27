import {ADD_ORDER,DELETE_ORDER} from '../actions/type'

export default function (state = [], action){
    switch (action.type){
        case ADD_ORDER:
        //check xem mon day da co chua
        const getOrderByName = state.filter(order => order.name === action.payload.name)
        if(getOrderByName.length === 0){
            //add
            return[...state,{
                name: action.payload.name,
                unitPrice:action.payload.unitPrice,
                amount: 1
            }]
        }else{
            //update
            return state.map(order => order.name === action.payload.name
                ?{
                    name:order.name,
                    unitPrice:order.unitPrice,
                    amount:order.amount +1
                }
                :order)
        }

        case DELETE_ORDER:
            return state.filter(item => item.name !== action.payload.name)

        default: return state
    }
}