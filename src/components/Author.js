import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';

class Author extends Component {

    render() {
        return (
            <footer className="author-wrap">
                <div className="author-inner">
                    <h1 className="author-name">Choi Seunghwan</h1>
                    <p className="author-comment">안녕하세요 최승환입니다 ^^. 어릴 적 레고를 조립하는 것처럼, 소프트웨어를 설계하고 구조를 분석하고 성능을 최적화 하는데 흥미가 있습니다. 또한 최근엔 웹 앱 서비스, Frontend, Backend에 흥미가 생겨 Toy Project를 진행하고 있습니다. 그럼 다들 좋은 하루 되세요. 방문해 주셔서 감사합니다 ^^. - May 1, 2019 </p>
                    <Avatar className="author-avatar">SH</Avatar>
                </div>

            </footer>
        )
    }
}

export default Author;