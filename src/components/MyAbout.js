import React, { Component } from 'react';
import aboutImg from '../asset/img/about-banner2.jpg';
import aboutmeHtml from '../asset/html/about_choiseunghwan.html';

class MyAbout extends Component {


    render() {
        return (
            <div>
                <div className="parallax-outer marginbottom-20vh">
                    <figure className="parallax-background vh100" style={{ backgroundImage: "url(" + aboutImg + ")", backgroundSize: "contain" }}>
                        <header className="post-detail-header">
                            <h1 className="detail-header-title">About Choi Seunghwan</h1>
                            <h4 className="detail-header-subtitle">Creative Developer</h4>
                        </header>
                    </figure>
                </div>

                <section className="detail-contents">
                    <div className="content-markdown">
                    <div dangerouslySetInnerHTML={{ __html: aboutmeHtml }} />
                    </div>
                </section>

            </div>
        )
    }
}

export default MyAbout;
