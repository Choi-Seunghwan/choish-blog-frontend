import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from 'react-redux';
import { createPost, uploadFile, MEDIA_URL } from '../actions/index';

import {TextField, Button }from '@material-ui/core/';
import '../asset/css/editor.css';

class MyEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            slug: "",
            tag: "",
            cover_image_url: "",
            uploadedImages: [],
            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        var contents = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        const { title, subtitle, slug, tag , cover_image_url} = this.state;
        const post = { title, subtitle, slug, tag, contents , cover_image_url};

        this.props.createPost(post);
        this.props.params.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    uploadCallback(file) {
        const uploadedImages = this.state.uploadedImages;

        const imageObject = {
            file: file,
            // localSrc: URL.createObjectURL(file)
            src: MEDIA_URL + file.name
        }

        this.props.uploadFile(file)

        uploadedImages.push(imageObject);
        this.setState({ uploadedImages: uploadedImages })
        
        return new Promise(
            (resolve, reject) => {
                resolve({ data: { link: imageObject.src } });
            }
        )
    }

    handleCoverImage = (e) => {
        this.setState({
            cover_image_url: MEDIA_URL+e.target.files[0].name
        })
        this.props.uploadFile(e.target.files[0])
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    
                    <TextField
                        className="textfeild" 
                        label="Title"
                        placeholder="제목을 입력하세요."
                        variant="outlined"
                        margin="normal"
                        onChange={this.handleChange}
                        name="title" 
                        value={this.state.title} />

                    <TextField
                        className="textfeild"
                        label="Subtitle"
                        multiline
                        placeholder="부제목을 입력하세요."
                        variant="outlined"
                        margin="normal"
                        onChange={this.handleChange}
                        name="subtitle"
                        value={this.state.subtitle} />
                    <div className="flex-row">
                    <TextField
                        className="textfeild"
                        label="Slug"
                        placeholder="Slug를 입력하세요."
                        variant="outlined"
                        margin="normal"
                        onChange={this.handleChange}
                        name="slug"
                        value={this.state.slug} /> 

                    <TextField
                        className="textfeild"
                        label="Tag"
                        placeholder="태그를 입력하세요."
                        variant="outlined"
                        margin="normal"
                        onChange={this.handleChange}
                        name="tag"
                        value={this.state.tag} />
                    </div>

                    <div className="flex-row">
                    <input 
                        type="file"
                        id="outlined-button-file"
                        style={{ display: 'none' }}
                        onChange={this.handleCoverImage}
                        name="file" 
                        accept="image/x-png,image/gif,image/jpeg" />
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span">
                            Upload Cover Image
                        </Button>
                    </label>
                    <Button variant="outlined" type="submit">Write</Button>
                    </div>

                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="drf-main"
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{ image: { uploadCallback: this.uploadCallback.bind(this) } }}
                    />
                    
                    <TextField
                        className="textfeild"
                        label="draftToHTML"
                        multiline
                        disabled
                        variant="outlined"
                        margin="normal"
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
                    
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { createPost, uploadFile, })(MyEditor);