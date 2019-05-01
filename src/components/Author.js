import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';

class Author extends Component {

    render() {
        return (
            <footer className="author-wrap">
                <div className="author-inner">
                    <h1 className="author-name">Choi Seunghwan</h1>
                    <p className="author-comment">안녕하세요 Python과 Javascript를 사랑하는 개발자 최승환입니다.</p>
                    <Avatar className="author-avatar">SH</Avatar>
                </div>

            </footer>
        )
    }
}

export default Author;