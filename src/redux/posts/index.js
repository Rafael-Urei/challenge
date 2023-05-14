import { 
    GET_POSTS_REQUEST,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS,
    CREATE_POSTS_REQUEST,
    CREATE_POSTS_FAILURE,
    CREATE_POSTS_SUCCESS,
    DELETE_POSTS_REQUEST,
    DELETE_POSTS_SUCCESS,
    DELETE_POSTS_FAILURE,
    EDIT_POSTS_FAILURE,
    EDIT_POSTS_REQUEST,
    EDIT_POSTS_SUCCESS,
    GET_NEXT_POSTS_FAILURE,
    GET_NEXT_POSTS_SUCCESS,
    GET_NEXT_POSTS_REQUEST
} from "../../actions/posts";

const initialState = {
    next: '',
    previous: '',
    posts: [],
    loading: false
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                next: action.payload.next,
                previous: action.payload.previous,
                posts: action.payload.results,
                loading: false
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case CREATE_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_POSTS_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            }
        case CREATE_POSTS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case DELETE_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_POSTS_SUCCESS: 
            return {
                ...state,
                posts: [...state.posts.filter((post) => post.id !== action.payload)],
                loading: false
            }
        case DELETE_POSTS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case EDIT_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_POSTS_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.payload[0]) {
                        return {
                            ...post,
                            ...action.payload[1]
                        }
                    } else {
                        return post
                    }
                }),
                loading: false
            }
        case GET_NEXT_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_NEXT_POSTS_SUCCESS:
            return {
                ...state,
                next: action.payload.next,
                previous: action.payload.previous,
                posts: action.payload.results,
                loading: false
            }
        case GET_NEXT_POSTS_FAILURE:
            return {
                ...state,
                loading: false
            }

        case EDIT_POSTS_FAILURE:
            return state;
        default: return state;
    }
}
