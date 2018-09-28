import { RBG_SET } from "../actions/type";

const defaulState = [
    {
        "name": "red",
        "value": 0
    },
    {
        "name": "green",
        "value": 0
    },
    {
        "name": "blue",
        "value": 0
    },
]


export default function (state = defaulState, action) {
    switch (action.type) {
        case RBG_SET:
            if (action.payload.name === "red") {
                return [
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                    },
                    ...(state.filter(item => item.name === 'green')),
                    ...(state.filter(item => item.name === 'blue')),

                ]
            }

            if (action.payload.name === "green") {

                return [
                    ...(state.filter(item => item.name === 'red')),
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                    },

                    ...(state.filter(item => item.name === 'blue')),
                ]
            }

            if (action.payload.name === "blue") {
                return [
                    ...(state.filter(item => item.name === 'red')),
                    ...(state.filter(item => item.name === 'green')),
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                    },
                ]
            }
        default:
            return state

    }
}