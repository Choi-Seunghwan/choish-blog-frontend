import React, { Component } from 'react';
import mainImg from '../asset/img/editor.jpg'
import NavBar from './NavBar';

class HomeHeader extends Component {

	render() {
		return (
			<header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
			{/* <header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}></header> */}
				<div className="inner" >
					<div className="site-header-content">
						<h1 className="site-title">Choi Seunghwan Tech Blog</h1>
						<h4 className="site-subtitle">keep calm and commit {"&"} push</h4>
					</div>

					<NavBar className="top-70"/>
				</div>
			</header>
		)
	}
}

export default HomeHeader;