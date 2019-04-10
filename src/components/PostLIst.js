import React, { Component } from 'react';
import PostCard from './PostCard';
import APIService from './APIService';
import axios from 'axios';
import _ from 'lodash';

// import img1 from '../asset/img/post1.jpg';
// import img2 from '../asset/img/post2.jpg';
// import img3 from '../asset/img/post3.jpg';

const API_URL = 'http://localhost:8000';



class PostList extends Component {


	constructor(props) {
		super(props);
		this.state = {
			items: [],
			text: 'fffffffffffffffffffffffffffff'
		}
	}

	async getPostList() {
		const response =  await axios.get(`${API_URL}/api/posts`)
		.then( (res) => {
			return res;
		}).catch((error) => {
			console.error(error);
		})
		
		this.setState({
			items: response.data.results,
			text: 'hello'
		})
		console.log("response");
		console.log(response)

	}


	componentDidMount() {
		// const apiService = new APIService();
		// var items = apiService.getPostList();

		// var items = this.getPostList();
		this.getPostList();
		console.log('########')
	}

	draw_post_card() {
		let postCards = []
		this.state.items.forEach(function (i, index) {
			postCards.push(<PostCard item={i} key={index} />)
			console.log("foreach")
		});

		return postCards
	}

	render() {
		return (
			this.state.items.length
			?
			<div className="post-list">
				{this.draw_post_card()}
				
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
			</div>
			:
			<div>
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
				<p>{this.state.text}</p>
			</div>
		)
	}
}

export default PostList;
