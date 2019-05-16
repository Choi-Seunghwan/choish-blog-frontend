import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import avatarImg from '../asset/img/site-icon.png'

class Author extends Component {

    render() {
        // const user = this.props...
        // Get User,  Author.
        return (
            <footer className="author-wrap">
                <div className="author-inner">
                    {/* <h1 className="author-name"> { user.name }</h1> */}
                    <h1 className="author-name">Choi Seunghwan</h1>
                    {/* <p className="author-comment"> { user.introduction }</p> */}
                    <p className="author-comment">안녕하세요 최승환입니다. 미래의 CTO를 꿈꾸며 Information Technology Specialist 가 되기 위해 노력하고 있습니다. 잘 부탁드립니다. :)</p>
                    <Avatar className="author-avatar" src={avatarImg}>SH</Avatar>
                </div>

            </footer>
        )
    }
}

export default Author;