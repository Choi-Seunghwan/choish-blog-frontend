import React, { Component } from 'react';
import NavBar from './NavBar';

class BannerHeader extends Component {

	render() {
		return (
			// <header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
			<header className="site-header outer banner">
                <div className="inner" >
					<NavBar />
					<div className="site-header-content">
						<h1 className="site-title">{this.props.title} </h1>
						<h4 className="site-subtitle">{this.props.subtitle}</h4>
					</div>
				</div>
			</header>
		)
	}
}

export default BannerHeader;