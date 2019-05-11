import React, { Component } from 'react';
import SideMenu from './SideMenu';


class Layout extends Component {
	render() {
		return (
			<div className="site-wrapper">
				<SideMenu />
				{this.props.children}

			</div>
		)
	}
}

export default Layout;
