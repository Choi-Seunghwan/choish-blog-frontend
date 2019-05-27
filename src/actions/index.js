import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_APPEND = 'FETCH_ITEMS_APPEND'; //endglish, 같은 것을 붙이면 append. 서로 다른 것을 붙이면 attach, 책상에 포스트잇을 attach(붙이다) 포스트잇에 포스트잇을 append(붙이다) 
export const FETCH_ITEM ='FETCH_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const CLEAR_FETCHED_ITEM = 'CLEAR_FETCHED_ITEM'; // 미리 fetch 된 데이터가 남아있어, 데이터 받기 전 깜빡거리며 잠깐 보이는 버그 방지.
export const CLEAR_FETCHED_ITEMS = 'CLEAR_FETCHED_ITEMS'; // 미리 fetch 된 데이터가 남아있어, 데이터 받기 전 깜빡거리며 잠깐 보이는 버그 방지.


export const SET_LOADING = 'SET_LOADING';
export const UNSET_LOADING = 'UNSET_LOADING';


const host = window.location.host.split(':')[0];

export const ROOT_URL = 'http://'+  host + ':8000';
export const MEDIA_URL = 'http://' +  host + ':8000/media/';

export const fetchItems = (config) => {
    let url = `${ROOT_URL}/api/posts/`;
    let type = FETCH_ITEMS;

    if(config){
        if(config.api === "post"){
            url = `${ROOT_URL}/api/posts/?`;
        }
        else if(config.api == "devlog"){
            url = `${ROOT_URL}/api/devlogs/?`;
        }
        else if(config.api == "lifelog"){
            url = `${ROOT_URL}/api/lifelogs/?`;
        }

        if(config.tag){
            url = url + `&tag=${config.tag}`
        }

        if(config.append){
            type = FETCH_ITEMS_APPEND;
            url = url + `&page=${config.page}`
        }
    }
    // console.log("url");
    // console.log(url);

    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: type,
                payload: response,
            });
            dispatch(unsetLoading()); //using two dispatch is allowed. 
        });
    };
}

export const fetchItem = (slug, config) => {
    let url = `${ROOT_URL}/api/posts/post/${slug}`;

    if(config){
        if( config.api === "post"){
            url = `${ROOT_URL}/api/posts/post/${slug}`;
        }
        else if(config.api === "devlog"){
            url = `${ROOT_URL}/api/devlogs/devlog/${slug}`;
        }
        else if(config.api === "lifelog"){
            url = `${ROOT_URL}/api/lifelogs/lifelog/${slug}`;
        }
    }

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
    else if (config.config_type === "lifelog"){
        url = `${ROOT_URL}/api/lifelog/new/`;
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

export function clearFetchedItem(){
    return (dispatch) => {
        dispatch({type: CLEAR_FETCHED_ITEM})
    }
}

export function clearFetchedItems(){
    return (dispatch) => {
        dispatch({type: CLEAR_FETCHED_ITEMS})
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

export function setLoading(){
    return (dispatch) => {
        dispatch({type: SET_LOADING})
    }
}

export function unsetLoading(){
    return (dispatch) => {
        dispatch({type: UNSET_LOADING})
    }
}

