import React, { Component } from 'react';
import NavBar from './NavBar';

class BannerHeader extends Component {

	render() {
		return (
			// <header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
			<header className="site-header outer banner">
                <NavBar />
                
                <div className="inner" >
					<div className="site-header-content">
						<h1 className="site-title">Banner {this.props.title} </h1>
						<h4 className="site-subtitle">Banner... {this.props.subtitle}</h4>
					</div>
				</div>
			</header>
		)
	}
}

export default BannerHeader;