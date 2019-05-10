import React, { Component } from 'react';
import { fetchPost } from '../../actions/index';
import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import { Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

class PostDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
			display: "flex"
		};
	}

	addEventListener = (e) => {
		if (window.scrollY > 250) {
			this.setState({ opacity: 0, display: "none" })
		}
		else if (window.scrollY > 100) {
			this.setState({ opacity: 0.5, display: "flex"})
		}
		else {
			this.setState({ opacity: 1, display: "flex" })
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
				<div className="parallax-outer marginbottom-20vh">
					<figure className="parallax-background vh100" style={{ backgroundImage: `url(${post.cover_image_url})` }}>
						<header className="post-detail-header" style={{ opacity: this.state.opacity, display: this.state.display}} >
							<h1 className="detail-header-title">{post.title}</h1>
							<h4 className="detail-header-subtitle">{post.subtitle}</h4>
						</header>
					</figure>
				</div>

				<section className="detail-contents">
					
					<div className="content-markdown">
						<div dangerouslySetInnerHTML={{ __html: markdown }} />
						{post.subtitle}
					</div>

					<div className="detail-contents-discription">
					<div className="detail-contetns-tags">
							{/* need modification tags array. */}
							<Link to={"/tag/" + post.tag} style={{textDecoration: "none"}}>
								<Chip
									style={{heigh: "15px !important"}}
									className="detail-contents-tag"
									label={<p>{"# " + post.tag}</p>}
									variant="outlined"
								/>
							</Link>
						</div>
						<span>{post.title}</span><br/>
						{/* Author & time  */}
						<span>{"by Choi Seunghwan. " + post.created_at.split("T")[0]}</span>
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
