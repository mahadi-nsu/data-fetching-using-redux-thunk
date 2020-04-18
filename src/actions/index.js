import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

// export const fetchUsers = (id) => {
//     return async (dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     }

// }

//sytax change
export const fetchUsers = id => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
});

// const response =  jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     } 