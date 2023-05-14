import { LOGIN, LOGOUT } from "../../actions/user";

const initialState = {
    name: '',
    isAuthenticated: false,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                name: action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                name: '',
                isAuthenticated: false
            }
        default:
            return state
    }
};