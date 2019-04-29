import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class TagHeader extends Component {

	render() {
		const count = this.props.posts.count;
		const tag = this.props.params.match.params.tag;
		
		return (
			// <header className="site-header outer" style={{ backgroundImage: "url(" + mainImg + ")" }}>
			<header className="site-header outer banner">
                <div className="inner" >
					<NavBar />
					<div className="site-header-content">
						<h1 className="site-title">{tag}</h1>
						<h4 className="site-subtitle">{count} results for '{tag}' </h4>
					</div>
				</div>
			</header>
		)
	}
}


const mapStateToProps = (state) => ({
	posts: state.posts.all,
})

export default connect(mapStateToProps,)(TagHeader);
