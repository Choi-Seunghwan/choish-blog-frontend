import React, { Component } from 'react';
import NavBar from './NavBar';
import editImg from '../asset/img/editor.jpg'

class EditHeader extends Component {

	render() {
		return (
			<header className="site-header outer" style={{ backgroundImage: "url(" + editImg + ")" }}>
			{/* <header className="site-header outer banner"> */}
                <div className="inner" >
					<NavBar />
					<div className="site-header-content">
						<h1 className="site-title">Editor </h1>
						<h4 className="site-subtitle">좋은 글을 쓰자.</h4>
					</div>
				</div>
			</header>
		)
	}
}

export default EditHeader;