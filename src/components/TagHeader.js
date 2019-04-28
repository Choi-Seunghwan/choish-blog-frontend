import React, { Component } from 'react';
import NavBar from './NavBar';

class TagHeader extends Component {

	render() {
		return (
			// <header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
			<header className="site-header outer banner">
                <div className="inner" >
					<NavBar />
					<div className="site-header-content">
						<h1 className="site-title">{this.props.params.match.params.tag}</h1>
						<h4 className="site-subtitle">Tag..</h4>
					</div>
				</div>
			</header>
		)
	}
}

export default TagHeader;