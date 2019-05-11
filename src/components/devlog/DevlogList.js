import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems ,setLoading, unsetLoading} from '../../actions/index';
import DevlogCard from './DevlogCard';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class DevlogList extends Component {
    _istMounted = false

    fetchAndConfigDevlogs(append = false,){
        this.props.setLoading();
        let api = "devlog";
        let page = 1;
        
        
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

		if(this.props.params)
			if (this.props.params.match.params.tag){
				config.tag = this.props.params.match.params.tag;
			}
		
		this.props.fetchItems(config);
    }
    
    scrollEventListener = (e) => {
		if (this._istMounted) {
			// console.log(window.scrollY)
			// console.log(this.props.size.height);

			if (window.scrollY > this.props.size.height - 200
				&& !this.props.loading) {
				let append = true;
				this.fetchAndConfigDevlogs(append);
				console.log("here???")
				
			}
		}
	}

	componentDidMount() {
        this._istMounted = true
		window.addEventListener('scroll', this.scrollEventListener);
		this.fetchAndConfigDevlogs();
    }
    
    componentDidUpdate(prevProps){
		if(this.props.params)
			if(this.props.params.match.path !== prevProps.params.match.path
				|| this.props.params.match.params.tag !== prevProps.params.match.params.tag){
					this.fetchAndConfigDevlogs()
			}
    }
    
    componentWillUnmount() {
		this._istMounted = false;
		window.removeEventListener('scroll', this.scrollEventListener);
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
    nextPage: state.items.nextPage,
	prevPage: state.items.prevPage,

	loading: state.utils.loading,
})

export default connect(mapStateToProps, {fetchItems, setLoading, unsetLoading })(sizeMe()(DevlogList));
