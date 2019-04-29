import React, { Component } from 'react';
import aboutImg from '../asset/img/about-banner2.jpg';

class MyAbout extends Component {


    render() {
        return (
            <div>
                <div className="parallax-outer marginbottom-20vh">
                    <figure className="parallax-background vh100" style={{ backgroundImage: "url(" + aboutImg + ")", backgroundSize: "contain"}}>
                        <header className="post-detail-header">
                            <h1 className="detail-header-title">About Choi Seunghwan</h1>
                            <h4 className="detail-header-subtitle">Creative Developer</h4>
                        </header>
                    </figure>
                </div>

                <section className="detail-contents">
					<div className="content-markdown">
						<h2>최승환 (Choi Seunghwna)</h2>
                        <p>안녕하세요. 개발자 최승환입니다. 백엔드와 프론트엔드 둘 다 좋아하며
                            최신 IT 트랜드에 민감하며 새로운 것을 배우고자 합니다. 
                        </p>
                        <p>
                            소프트웨어의 논리적인 구상을 즐기며 시스템 성능의 최적화와 효율적 관리에 관심이 많습니다. 
                        </p>
					</div>
                </section>

            </div>
        )
    }
}

export default MyAbout;



// https://docs.google.com/document/d/18MpvYarE4FMvGdir99pa50_Pi6wS_JTntURK_Zo1zjs/edit?usp=sharing