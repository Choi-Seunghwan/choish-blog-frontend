import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { fetchItems ,setLoading, unsetLoading} from '../../actions/index';
import sizeMe from 'react-sizeme'

class PostList extends Component {
	_istMounted = false

	fetchAndConfigPosts(append = false, ) {
		this.props.setLoading();
		let api = "post";
		let page = 1;

		console.log("next")
		console.log(this.props.nextPage)
		if (append) {
			if (this.props.nextPage) {
				page = this.props.nextPage.split("?page=")[1];
			} else
				return false
		}

		let config = {
			api: api,
			tag: '',
			append: append,
			page: page,
		}

		if (this.props.params)
			if (this.props.params.match.params.tag) {
				config.tag = this.props.params.match.params.tag;
			}

		this.props.fetchItems(config);
		
	}

	scrollEventListener = (e) => {
		if (this._istMounted) {
			// console.log(window.scrollY)
			// console.log(this.props.size.height);

			if (window.scrollY > this.props.size.height - 500
				&& !this.props.loading) {
				let append = true;
				this.fetchAndConfigPosts(append);
				console.log("here???")
				
			}
		}
	}

	componentDidMount() {
		this._istMounted = true
		window.addEventListener('scroll', this.scrollEventListener);
		this.fetchAndConfigPosts();
	}

	componentDidUpdate(prevProps) {
		if (this.props.params)
			if (this.props.params.match.path !== prevProps.params.match.path
				|| this.props.params.match.params.tag !== prevProps.params.match.params.tag) {
				this.fetchAndConfigPosts()
			}
	}

	componentWillUnmount() {
		this._istMounted = false;
		window.removeEventListener('scroll', this.scrollEventListener);
	}

	renderPostCard() {
		const items = this.props.posts.results;

		if (!items) { return (<div></div>); };
		let postCards = []
		items.forEach(function (i, index) {
			postCards.push(<PostCard post={i} key={index} />)
		});
		return postCards
	}

	render() {
		return (
			<div className="post-list">
				{this.renderPostCard()}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.items.all,
	nextPage: state.items.nextPage,
	prevPage: state.items.prevPage,

	loading: state.utils.loading,
})

export default connect(mapStateToProps, { fetchItems, setLoading, unsetLoading})(sizeMe({ monitorHeight: true })(PostList));
