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
                            <h4 className="detail-header-subtitle">Information Technology Specialist</h4>
                        </header>
                    </figure>
                </div>

                <section className="detail-contents">
                    <div className="content-markdown">
                        <h2>최승환 (Choi Seunghwan)</h2>
                        <p>
                            안녕하세요 미래의 CTO 를 꿈꾸는 개발자 최승환입니다.
                        </p>
                        <p>
                            소프트웨어를 설계하고 효율적인 프로세스를 고민하고, 성능을 최적화 하는 것을 <span className="mouse-text" onClick={this.handleclick}>좋아</span>합니다.
                        </p>
                        <p>
                            새로운 기술에 꾸준히 흥미를 갖는 것은 개발자를 직업으로 삼는 사람에게 꼭 필요한 덕목이라 생각합니다.
                        </p>
                        <p>
                            풀스택 웹 개발과 분산 시스템, 데이터 처리에 관심이 많습니다. 
                        </p>
                        <p>
                            만나서 반갑습니다 :) 
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: aboutmeHtml }} />
                    </div>
                </section>
            </div>
        )
    }
}

export default MyAbout;
