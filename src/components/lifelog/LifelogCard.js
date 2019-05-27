import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class LifelogCard extends Component {

    render() {
        const lifelog = this.props.lifelog;
        const detailUrl = "/lifelog/" + lifelog.slug;
        var image_card = <span />

        if (lifelog.cover_image_url !== ""){
            image_card = (
                <Link className="card-image-link" to={detailUrl}>
                    <div className="card-image" style={{ backgroundImage: `url(${lifelog.cover_image_url})` }} />
                </Link>
            )
        }

        return (
            <article className="devlog-card">
                {image_card}
                <div className="card-content">
                    <Link className="card-content-link" to={detailUrl}>
                        <header className="card-header">
                            <span className="card-tags">{lifelog.tag}</span>
                            <h2 className="devlog-card-title">{lifelog.title}</h2>
                        </header>
                        <section className="devlog-card-subtitle">
                            <p>{lifelog.subtitle}</p>
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

export default LifelogCard;
