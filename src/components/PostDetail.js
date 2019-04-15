import React, { Component } from 'react';
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

import img1 from '../asset/img/post1.jpg';



class PostDetail extends Component {

	componentDidMount() {
		let slug = this.props.params.match.params.slug

		this.props.fetchPost(slug);
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
