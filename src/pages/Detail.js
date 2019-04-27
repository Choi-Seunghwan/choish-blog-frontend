import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';
import DisqusThread from '../components/DisqusThread';
import DevlogDetail from '../components/DevlogDetail';

class Detail extends Component {

    renderDetailPage(){
        let path = this.props.location.pathname.split('/')[1];

        if (path === "post")
            return(<PostDetail params={this.props}/>)
        else if (path == "devlog")
            return(<DevlogDetail params={this.props}/>)
        else
            return(<div></div>)
    }

    render() {
        return (
            <Layout>
                <Header />
                <Main>
                    { this.renderDetailPage() }
                    <DisqusThread />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default Detail;