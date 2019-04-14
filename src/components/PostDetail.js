import React, { Component } from 'react';
import queryString from 'query-string';
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

import img1 from '../asset/img/post1.jpg';



class PostDetail extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		let id = queryString.parse(this.props.param).item

		// this.getPostDetail();
		console.log(this.props.param)
	}

	renderPost() {
		const post = this.props.post

		if(!post) {return (<div></div>);};
		return(
			<div>
				<figure className="parallax-background" style={{ backgroundImage: "url(" + img1 + ")" }}>
					
				</figure>
				<header className="post-detail-header">
                    <h1 className="post-detail-title">{post.title}</h1>
                </header>
                                
                <section className="post-detail-content">
					<div className="content-markdown">
						{post.subtitle}
						{post.contents}
					</div>
				</section>
			</div>
		);
	}

	render() {
		return (
			<article className="post-detail">
				{this.renderPost()}
			</article>
		)
	}
}

const mapStateToProps = (state) => ({
	post: state.posts.post,
})


export default connect(mapStateToProps, {fetchPost, })(PostDetail);
