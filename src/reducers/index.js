import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: PostReducer,
    user: userReducer,
});