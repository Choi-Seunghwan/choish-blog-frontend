import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST ='FETCH_POST';

export const ROOT_URL = 'http://localhost:8000';

export const fetchPosts = (filter) => {
    let url = `${ROOT_URL}/api/posts/`;
    
    if(filter){
        if(filter.tag){
            url = url + `?tag=${filter.tag}`
        }
    }
    
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response,
            });
        });
    };
}

export const fetchPost = (slug) => {
    let url = `${ROOT_URL}/api/posts/post/${slug}`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_POST,
                payload: response,
            })
        })
    }
}