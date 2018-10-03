import { SHOW_DETAIL } from "../actions/type";

export default function (movie = {}, action) {
    switch (action.type) {
        case SHOW_DETAIL:
            return action.payload
        default:
            return movie

    }
}