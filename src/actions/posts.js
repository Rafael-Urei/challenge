import axios from "axios";
import { api } from "../services/api";

export const GET_POSTS_REQUEST = 'posts/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE';

export const CREATE_POSTS_REQUEST = 'posts/CREATE_POSTS_REQUEST';
export const CREATE_POSTS_SUCCESS = 'posts/CREATE_POSTS_SUCCSESS';
export const CREATE_POSTS_FAILURE = 'posts/CREATE_POSTS_FAILURE';

export const DELETE_POSTS_REQUEST = 'posts/DELETE_POSTS_REQUEST';
export const DELETE_POSTS_SUCCESS = 'posts/DELETE_POSTS_SUCCSESS';
export const DELETE_POSTS_FAILURE = 'posts/DELETE_POSTS_FAILURE';

export const EDIT_POSTS_REQUEST = 'posts/EDIT_POSTS_REQUEST';
export const EDIT_POSTS_SUCCESS = 'posts/EDIT_POSTS_SUCCSESS';
export const EDIT_POSTS_FAILURE = 'posts/EDIT_POSTS_FAILURE';

export const GET_POST_ID = 'posts/GET_POST_ID';

export const GET_NEXT_POSTS_REQUEST = 'posts/GET_NEXT_POST_REQUEST';
export const GET_NEXT_POSTS_SUCCESS = 'posts/GET_NEXT_POSTS_SUCCESS';
export const GET_NEXT_POSTS_FAILURE = 'posts/GET_NEXT_POSTS_FAILURE';

//Action Creator

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS_REQUEST,
        })

        try {
            const posts = await api.get('careers/');
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: posts.data,
            })
        } catch {
            dispatch({
                type: GET_POSTS_FAILURE,
            })
        }
    }
};

export const getNextPost = (next) => {
    return async (dispatch) => {
        dispatch({
            type: GET_NEXT_POSTS_REQUEST,
        })

        try {
            const posts = await axios.get(next)
            dispatch({
                type: GET_NEXT_POSTS_SUCCESS,
                payload: posts.data
            })
        } catch {
            dispatch({
                type: GET_NEXT_POSTS_FAILURE,
            })
        }
    }
};

export const getPostId = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_POST_ID,
            payload: id
        })
    }
};

export const createPost = (data) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_POSTS_REQUEST,
        })

        try {
            const posts = await api.post('careers/', data);
            dispatch({
                type: CREATE_POSTS_SUCCESS,
                payload: posts.data
            })
        } catch {
            dispatch({
                type: CREATE_POSTS_FAILURE,
            })
        }
    }
};

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_POSTS_REQUEST,
        })

        try {
            api.delete(`careers/${id}/`);
            dispatch({
                type: DELETE_POSTS_SUCCESS,
                payload: id
            })
        } catch {
            dispatch({
                type: CREATE_POSTS_FAILURE,
            })
        }
    }
};

export const editPost = (id, data) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_POSTS_REQUEST,
        })

        try {
            api.patch(`careers/${id}/`, data)
            dispatch({
                type: EDIT_POSTS_SUCCESS,
                payload: [id, data]
            })
        } catch {
            dispatch({
                type: EDIT_POSTS_FAILURE,
            })
        }
    }
};