import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/index';
import DevlogCard from './DevlogCard';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class DevlogList extends Component {

    fetchAndFilterDevlogs(){
        let api = "devlog";
        
		let filter = {
            api: api,
			tag: "",
		}
		if(this.props.params)
			if (this.props.params.match.params.tag){
				filter.tag = this.props.params.match.params.tag;
			}
		
		this.props.fetchItems(filter);
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
	devlogs: state.items.all,
})

export default connect(mapStateToProps, {fetchItems, })(sizeMe()(DevlogList));
