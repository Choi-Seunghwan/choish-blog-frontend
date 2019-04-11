import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PostCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item
        }
    }

    render() {

        const imgUrl = require('../asset/img/post1.jpg')
        const detailUrl = "/detail?item=" + this.state.item.id
        console.log(detailUrl)
        return (
            <article className="post-card">
                <Link className="post-card-image-link" to={detailUrl}>
                    <div className="post-card-image" style={{ backgroundImage: `url(${imgUrl})` }} />
                </Link>
                <div className="post-card-content">
                    <Link className="post-card-content-link" to={detailUrl}>
                        <header className="post-card-header">
                            <span className="post-card-tags">{this.state.item.tags}</span>
                            <h2 className="post-card-title">{this.state.item.title}</h2>
                        </header>
                        <section className="">
                            <p>{this.state.item.subtitle}</p>
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
