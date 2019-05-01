import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDevlogs } from '../../actions/index';
import DevlogCard from './DevlogCard';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class DevlogList extends Component {

    fetchAndFilterDevlogs(){
		let filter = {
			tag: "",
		}
		if(this.props.params)
			if (this.props.params.match.params.tag){
				filter.tag = this.props.params.match.params.tag;
			}
		
		this.props.fetchDevlogs(filter);
	}

	componentDidMount() {
		this.fetchAndFilterDevlogs();
    }
    
    componentDidUpdate(prevProps){
		if(this.props.params)
			if(this.props.params.match.path !== prevProps.params.match.path
				|| this.props.params.match.params.tag !== prevProps.params.match.params.tag){
					this.fetchAndFilterPosts()
			}
	}

    renderDevlogCard() {
        const items = this.props.devlogs.results;

        if(!items) {return (<div></div>);};
        let devlogCards = []
        items.forEach(function (i, index) {
            devlogCards.push(<DevlogCard devlog={i} key={index} />)
        });
        return devlogCards
    }

    render() {
        const { size: { width } } = this.props;

        return (
            <div className="devlog-list">
                <StackGrid columnWidth={ width >= 800 ? '22.2%' : 
                                            width >= 600 ? '33.3%' :
                                            width >= 450 ? '45%' : '100%'}>
                    {this.renderDevlogCard()}
                </StackGrid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	devlogs: state.devlogs.all,
})

export default connect(mapStateToProps, {fetchDevlogs, })(sizeMe()(DevlogList));
