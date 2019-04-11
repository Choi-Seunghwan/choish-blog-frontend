import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import img1 from '../asset/img/post1.jpg';


const API_URL = 'http://localhost:8000';


class PostDetail extends Component {

	constructor(props){
		super(props)
		this.state = {
			params: queryString.parse(this.props.param),
			item: {}
		}
		console.log(this.state.params.item)
		
		
	}

	async getPostDetail() {
		const response =  await axios.get(`${API_URL}/api/posts/${this.state.params.item}`)
		.then( (res) => {
			this.setState({
				item: res.data
			})
			console.log(res)
			return res;
		}).catch((error) => {
			console.log("PostList Axios Error")
			console.error(error);
		})
		
	}


	componentDidMount() {
		this.getPostDetail();
	}

	draw_text(){
		let reDom = [];

		for(let i= 0; i < 20; i++){
			reDom.push( <p key={i}>lern eoelw qmw ewke ene wk wl wq m wkee n ekwlewek wewen wek </p> )
		}
		return reDom;
	}

	render() {
		
		return (
			<article className="post-detail">
                
				<figure className="parallax-background" style={{ backgroundImage: "url(" + img1 + ")" }}>
					
				</figure>
				<header className="post-detail-header">
                    <h1 className="post-detail-title">{this.state.item.title}</h1>
                </header>
                                
                <section className="post-detail-content">
					<div className="content-markdown">
						{this.state.item.subtitle}
						{this.state.item.contents}
					</div>
				</section>
			</article> 
		)
	}
}

export default PostDetail;
