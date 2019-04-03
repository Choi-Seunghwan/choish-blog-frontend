import React, { Component } from 'react';
import mainImg from '../asset/img/main.jpg'
import NavBar from './NavBar';

class Header extends Component {

	render() {
		return (
			<header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
				<div className="inner" >
					<div className="site-header-content">
						<h1 className="site-title">Seunghwan Tech Blog</h1>
						<h4 className="site-subtitle">keep calm and commit {"&"} push</h4>
					</div>

					<NavBar />
				</div>
			</header>
		)
	}
}

export default Header;