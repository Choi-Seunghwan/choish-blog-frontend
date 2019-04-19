import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class MyEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange: Function = (editorState) => {
        // console.log(editorState)
        this.setState({
          editorState,
        });
      };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea style={{width: "100%"}}
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        );
    }
}

export default MyEditor;