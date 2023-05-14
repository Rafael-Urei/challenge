import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";
import postId from "./postId";
import modal from "./modal";

export const rootReducer = combineReducers({user, posts, postId, modal});