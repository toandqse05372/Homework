import { LIST_MOVIE } from "../actions/type";

export default function (state = {}, action) {
    switch (action.type) {
        case LIST_MOVIE:
            return action.payload
        default:
            return state

    }
}