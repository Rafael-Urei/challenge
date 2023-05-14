import { GET_POST_ID } from "../../actions/posts";

const initialState = '';

export default function postId (state = initialState, action) {
    switch (action.type) {
        case GET_POST_ID:
            return action.payload;
        default:
            return state
    }
}