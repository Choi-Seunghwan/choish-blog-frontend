import React, { Component } from 'react';


class PostCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item
        }
    }

    render() {
        console.log(this.state.item)

        return (
            <article className="post-card">
                <a className="post-card-image-link" href="/detail">
                    <div className="post-card-image" style={{ backgroundImage: "url(" + this.state.item.image + ")" }} />
                </a>
                <div className="post-card-content">
                    <a ClassName="post-card-content-link" href="/detail">
                        <header className="post-card-header">
                            <span className="post-card-tags">{this.state.item.tag}</span>
                            <h2 className="post-card-title">{this.state.item.title}</h2>
                        </header>
                        <section className="">
                            <p>{this.state.item.content}</p>
                            <div></div>
                        </section>

                    </a>
                </div>

            </article>
        )
    }
}

export default PostCard;
