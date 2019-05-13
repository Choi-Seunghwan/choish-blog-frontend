import React, { Component } from 'react';
import { fetchItem, clearFetchedItem } from '../../actions/index';
import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import { Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';


class DevlogDetail extends Component {

    componentDidMount() {
		let slug = this.props.params.match.params.slug;
		let api= "devlog"
		let filter = {
			api : api
		}
		this.props.fetchItem(slug, filter);
    }
	
	componentWillUnmount(){
		this._istMounted = false
		this.props.clearFetchedItem();
	}

    renderDevlog() {
        const devlog = this.props.devlog;
        
        if (!devlog) {return (<div></div>);};
        let contents = devlog.contents

        const md = new Remarkable({html:true})
        const markdown = md.render(contents);

        return (
            <div>
                <div className="parallax-outer marginbottom-20vh">
					<figure className="parallax-background vh60" style={{ backgroundImage: `url(${devlog.cover_image_url})` }}>	
						<header className="detail-header">
							<h1 className="detail-header-title">{devlog.title}</h1>
							<h4 className="detail-header-subtitle">{devlog.subtitle}</h4>
						</header>
					</figure>
				</div>

                <section className="detail-contents">
					<div className="content-markdown">
						<div dangerouslySetInnerHTML={{ __html: markdown }} />
					</div>

                    <div className="detail-contents-discription">
					<div className="detail-contetns-tags">
							{/* need modification tags array. */}
							<Link to={"/devlog/"} style={{textDecoration: "none"}}>
								<Chip
									style={{heigh: "15px !important"}}
									className="detail-contents-tag"
									label={<p>{"# " + devlog.tag}</p>}
									variant="outlined"
								/>
							</Link>
						</div>
						<span>{devlog.title}</span><br/>
						{/* Author & time  */}
						<span>{"by Choi Seunghwan. " + devlog.created_at.split("T")[0]}</span>
					</div>
				</section>
            </div>	
        )
    }

    render() {
        return (
            <article className="post-detail">
                { this.renderDevlog() }
            </article>
        )
    }
}

const mapStateToProps = (state) => ({
	devlog: state.items.item,
})

export default connect(mapStateToProps, { fetchItem, clearFetchedItem })(DevlogDetail);
