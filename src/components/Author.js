import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';

class Author extends Component {

    render() {
        return (
            <footer className="author-wrap">
                <div className="author-inner">
                    <h1 className="author-name">Choi Seunghwna</h1>
                    <p className="author-comment">i'm Choi Seunghwna. i love python and javascript</p>
                    <Avatar className="author-avatar">SH</Avatar>
                </div>

            </footer>
        )
    }
}

export default Author;