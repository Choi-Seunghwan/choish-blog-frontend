import React, { Component } from 'react';
import aboutImg from '../asset/img/about-banner2.jpg';
import aboutmeHtml from '../asset/html/about_choiseunghwan.html';
import '../asset/css/mouse-star.css';


class MyAbout extends Component {

    componentDidMount() {
        // const script1 = document.createElement("script")
        // script1.type="text/javascript";
        // script1.src = "https://rawgithub.com/soulwire/sketch.js/v1.0/js/sketch.min.js"
        // script1.async = true;
        // document.body.appendChild(script1);     

    }

    handleclick = () => {
        console.log("hohohoho")
        const script2 = document.createElement("script")
        script2.type = "text/javascript";
        script2.src = require('../asset/mouse-star')
        script2.async = true;
        document.body.appendChild(script2);
    }

    render() {
        return (
            <div id="MyAbout">
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
                        <h2>최승환 (Choi Seunghwna)</h2>
                        <p>
                            안녕하세요 최승환입니다.
                        </p>
                        <p>
                            어릴 적 레고를 조립하는 것처럼,
                        </p>
                        <p>
                            소프트웨어를 설계하고 구조를 분석하고 성능을 최적화 하는데 <span className="mouse-text" onClick={this.handleclick}>흥미</span>가 있습니다.
                        </p>
                        <p>
                            또한 최근엔 웹 앱 서비스, Frontend, Backend에 <span className="mouse-text" onClick={this.handleclick}>흥미</span>가 생겨 Toy Project를 진행하고 있습니다.
                        </p>
                        <p>
                            그럼 다들 좋은 하루 되세요. 방문해 주셔서 감사합니다.
                        </p>
                        <p>
                            - May 1, 2019
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: aboutmeHtml }} />
                    </div>
                </section>
            </div>
        )
    }
}

export default MyAbout;
