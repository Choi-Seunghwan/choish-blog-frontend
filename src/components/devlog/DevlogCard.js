import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class DevlogCard extends Component {

    render() {
        const devlog = this.props.devlog;
        const detailUrl = "/devlog/" + devlog.slug;
        var image_card = <span />

        if (devlog.cover_image_url !== ""){
            image_card = (
                <Link className="card-image-link" to={detailUrl}>
                    <div className="card-image" style={{ backgroundImage: `url(${devlog.cover_image_url})` }} />
                </Link>
            )
        }

        return (
            <article className="devlog-card">
                {image_card}
                <div className="card-content">
                    <Link className="card-content-link" to={detailUrl}>
                        <header className="card-header">
                            <span className="card-tags">{devlog.tag}</span>
                            <h2 className="devlog-card-title">{devlog.title}</h2>
                        </header>
                        <section className="devlog-card-subtitle">
                            <p>{devlog.subtitle}</p>
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

export default DevlogCard;
