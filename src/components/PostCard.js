import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PostCard extends Component {

    render() {

        const imgUrl = require('../asset/img/post1.jpg')
        const detailUrl = "/post/" + this.props.post.slug
        
        return (
            <article className="post-card">
                <Link className="post-card-image-link" to={detailUrl}>
                    <div className="post-card-image" style={{ backgroundImage: `url(${imgUrl})` }} />
                </Link>
                <div className="post-card-content">
                    <Link className="post-card-content-link" to={detailUrl}>
                        <header className="post-card-header">
                            <span className="post-card-tags">{this.props.post.tag}</span>
                            <h2 className="post-card-title">{this.props.post.title}</h2>
                        </header>
                        <section className="">
                            <p>{this.props.post.subtitle}</p>
                            <div></div>
                        </section>

                    </Link>
                    <footer></footer>
                </div>
            </article>
        )
    }
}

export default PostCard;
