import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST ='FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const FETCH_DEVLOGS = 'FETCH_DEVLOGS';
export const FETCH_DEVLOG = 'FETCH_DEVLOG';
export const CREATE_DEVLOG = 'CREATE_DEVLOG';

export const UPLOAD_FILE = 'UPLOAD_FILE';

const host = window.location.host.split(':')[0];

export const ROOT_URL = 'http://'+  host + ':8000';
export const MEDIA_URL = 'http://' +  host + ':8000/media/';

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

export function fetchDevlogs() {
    let url = `${ROOT_URL}/api/devlogs/`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_DEVLOGS,
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

export const fetchDevlog = (slug) => {
    let url = `${ROOT_URL}/api/devlogs/devlog/${slug}`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_DEVLOG,
                payload: response,
            })
        })
    }
}


export function createPost(post, config) {
    let url = '';
    let type = null;

    if (config.config_type === "post"){
        url = `${ROOT_URL}/api/posts/new/`;
        type = CREATE_POST;
    }
    else{
        url = `${ROOT_URL}/api/devlogs/new/`;
        type = CREATE_DEVLOG;
    }


    // console.log(post.uploadedImages[0].file);
    // let myfile = post.uploadedImages[0].file;
    // var myblob = new Blob([myfile], {type: 'image/png'});

    // var formData = new FormData();
    // formData.append("title", post.title);
    // formData.append("subtitle", post.subtitle);
    // formData.append("slug", post.slug);
    // formData.append("tag", post.tag);
    // formData.append("contents", post.contents);
    // formData.append("myfile", myblob);

    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    return (dispatch) => {
        axios.post(url, post).then(response => {
            dispatch({
                type: type,
                payload: response
            })
            // console.log("response")
            // console.log(response)
        })
    }
}



export function uploadFile(file) {
    let url = `${ROOT_URL}/upload/${file.name}`;

    const formData = new FormData();
    formData.append('file', file)

    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    return (dispatch) => {
        axios.post(url, formData).then(response => {
            dispatch({
                type: UPLOAD_FILE,
                payload: response
            })
            // console.log("response")
            // console.log(response)
        }).catch(error => {
            // console.log("error")
            // console.log(error.response)
        })
    }
}