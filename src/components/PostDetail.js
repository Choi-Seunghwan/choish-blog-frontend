import React, { Component } from 'react';
import img1 from '../asset/img/post1.jpg';

class PostDetail extends Component {

	draw_text(){
		let reDom = [];

		for(let i= 0; i < 20; i++){
			reDom.push( <p>lern eoelw qmw ewke ene wk wl wq m wkee n ekwlewek wewen wek </p> )
		}
		return reDom;
	}

	render() {
		return (
			<article className="post-detail">
                
				<figure className="parallax-background" style={{ backgroundImage: "url(" + img1 + ")" }}>
					
				</figure>
				<header className="post-detail-header">
                    <h1 className="post-detail-title">there is title</h1>
                </header>
                                
                <section className="post-detail-content">
					<div className="content-markdown">
						{this.draw_text()}
					</div>
				</section>
			</article> 
		)
	}
}

export default PostDetail;
