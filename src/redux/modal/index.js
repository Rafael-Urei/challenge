import { SHOW_MODAL_DELETE, SHOW_MODAL_EDIT } from "../../actions/modal";

const initialState = null

export default function modal(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL_DELETE:
            return action.payload
        case SHOW_MODAL_EDIT:
            return action.payload
        default: return state;
    }
}