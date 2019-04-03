import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {
	constructor(props){
		super(props);

		this.state = {
			cardList: [
				{
					title: "title1",
					link: "#1",
					contents: "contents1",
					tag: "tag1",
				},
				{
					title: "title2",
					link: "#2",
					contents: "contents2",
					tag: "tag2",
				},
				{
					title: "title3",
					link: "#3",
					contents: "contents3",
					tag: "tag3",
				},
				
			]
		}
	}


	get_post_list(){
		
	}
	
	draw_post_card(){
		return(
			<PostCard item=""/>
		)
	}

	render() {
		return (
			<div className="post-list">
                {this.draw_post_card()}
            </div>
		)
	}
}

export default PostList;
