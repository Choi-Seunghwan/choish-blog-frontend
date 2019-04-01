import Header from './Header';
import React, { Component } from 'react';
import Footer from "./Footer";
class Layout extends Component {

	render() {
		return (
			<div>
				<Header />
				<div>
					{this.props.children}
				</div>

				<Footer />
			</div>
		)
	}
}

export default Layout;
