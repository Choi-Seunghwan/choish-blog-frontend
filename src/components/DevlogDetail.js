import React, { Component } from 'react';
import { fetchDevlog } from '../actions/index';
import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import { Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';


class DevlogDetail extends Component {

    componentDidMount() {
		let slug = this.props.params.match.params.slug
		this.props.fetchDevlog(slug);
    }
    
    renderDevlog() {
        const devlog = this.props.devlog;
        console.log(devlog);
        if (!devlog) {return (<div></div>);};
        let contents = devlog.contents

        const md = new Remarkable({html:true})
        const markdown = md.render(contents);

        return (
            <div>
                <div className="parallax-outer">
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
						{devlog.subtitle}
					</div>

                    <div className="detail-contetns-tags">
						{/* need modification tags array. */}
						<Link to={"/devlog/"}>
							<Chip
								className="detail-contents-tag"
								label={<h5>{"# "+devlog.tag}</h5>}
								variant="outlined"
							/>
						</Link>
					</div>
				</section>
            </div>
        )
    }


    render() {
        console.log("there")
        return (
            <article className="post-detail">
                { this.renderDevlog() }
            </article>
        )
    }
}


const mapStateToProps = (state) => ({
	devlog: state.devlogs.devlog,
})

export default connect(mapStateToProps, { fetchDevlog, })(DevlogDetail);
