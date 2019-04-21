import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';


class MyEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            slug: "",
            tag: "",

            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange: Function = (editorState) => {
        // console.log(editorState)
        this.setState({
            editorState,
        });
    };

    onBtnClick() {
        console.log("editorState");
        console.log(this.state.editorState);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var contents = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        const { title, subtitle, slug, tag } = this.state;
        const post = { title, subtitle, slug, tag, contents };
        
        console.log("submit!");
        this.props.createPost(post);
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <br />
                    <br />title :
                <input type="text" onChange={this.handleChange} name="title" value={this.state.title} />

                    <br />subtitle :
                <input type="text" onChange={this.handleChange} name="subtitle" value={this.state.subtitle} />

                    <br />slug :
                <input type="text" onChange={this.handleChange} name="slug" value={this.state.slug} />

                    <br />tag :
                <input type="text" onChange={this.handleChange} name="tag" value={this.state.tag} />

                    <br />
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <textarea style={{ width: "100%" }}
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {createPost, })(MyEditor);