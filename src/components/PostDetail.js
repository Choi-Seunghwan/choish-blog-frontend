import React, { Component } from 'react';
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';
import Remarkable from 'remarkable';

import img1 from '../asset/img/post1.jpg';



class PostDetail extends Component {

	constructor(props){
		super(props);
		this.state = {
			opacity: 1,
		};
	}

	addEventListener = e => {
		if (window.scrollY > 250 ) {
			this.setState({opacity: 0})
		}
		else if (window.scrollY > 100  ) {
			this.setState({opacity: 0.5})
		}
		else {
			this.setState({opacity: 1})
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.addEventListener);

		let slug = this.props.params.match.params.slug
		this.props.fetchPost(slug);
	}

	renderPost() {
		const post = this.props.post
		if (!post) { return (<div></div>); };
		let contents = post.contents

		const md = new Remarkable({ html: true })
		const markdown = md.render(contents);

		return (
			<div>
				<div className="parallax-outer">
					<figure className="parallax-background" style={{ backgroundImage: `url(${post.cover_image_url})` }}>	
						<header className="post-detail-header" style={{opacity: this.state.opacity}} >
							<h1 className="post-detail-header-title">{post.title}</h1>
							<h4 className="post-detail-header-subtitle">{post.subtitle}</h4>
						</header>
					</figure>

				</div>


				<section className="post-detail-contents">
					<div className="content-markdown">
						<div dangerouslySetInnerHTML={{ __html: markdown }} />
						{post.subtitle}
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


export default connect(mapStateToProps, { fetchPost, })(PostDetail);
