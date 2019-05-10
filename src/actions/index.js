import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEM ='FETCH_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPLOAD_FILE = 'UPLOAD_FILE';

const host = window.location.host.split(':')[0];

export const ROOT_URL = 'http://'+  host + ':8000';
export const MEDIA_URL = 'http://' +  host + ':8000/media/';

export const fetchItems = (filter) => {
    let url = `${ROOT_URL}/api/posts/`;
    
    console.log("filter");
    console.log(filter);

    if(filter){
        if(filter.api === "post"){
            url = `${ROOT_URL}/api/posts/`;
        }
        else if(filter.api == "devlog"){
            url = `${ROOT_URL}/api/devlogs/`;
        }

        if(filter.tag){
            url = url + `?tag=${filter.tag}`
        }
    }
    
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_ITEMS,
                payload: response,
            });
        });
    };
}

export const fetchItem = (slug, filter) => {
    let url = `${ROOT_URL}/api/posts/post/${slug}`;

    console.log("filter");
    console.log(filter);
    if(filter){
        if( filter.api === "post"){
            url = `${ROOT_URL}/api/posts/post/${slug}`;
        }
        else if(filter.api === "devlog"){
            url = `${ROOT_URL}/api/devlogs/devlog/${slug}`;
        }
    }
    console.log("url")
    console.log(url)
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: FETCH_ITEM,
                payload: response,
            })
        })
    }
}


export function createItem(item, config) {
    let url = '';
    let type = CREATE_ITEM;

    if (config.config_type === "post"){
        url = `${ROOT_URL}/api/posts/new/`;
    }
    else if (config.config_type === "devlog"){
        url = `${ROOT_URL}/api/devlogs/new/`;
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
        axios.post(url, item).then(response => {
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