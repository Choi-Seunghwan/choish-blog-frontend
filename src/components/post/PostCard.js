import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostCard extends Component {

    render() {
        const detailUrl = "/post/" + this.props.post.slug

        return (
            <article className="post-card">

                <Link className="post-card-image-link" to={detailUrl}>
                    <div className="post-card-image" style={{ backgroundImage: `url(${this.props.post.cover_image_url})` }} />
                </Link>
                <div className="post-card-content">
                    <Link className="post-card-content-link" to={detailUrl}>
                        <header className="card-header">
                            <span className="card-tags">{this.props.post.tag}</span>
                            <h2 className="post-card-title">{this.props.post.title}</h2>
                        </header>
                        <section className="post-card-subtitle">
                            <p>{this.props.post.subtitle}</p>
                        </section>

                    </Link>
                    <footer></footer>
                </div>
                <Link to={detailUrl}>
                <div className="overlay"></div>
                </Link>
            </article>
        )
    }
}

export default PostCard;
