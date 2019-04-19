import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';
import DisqusThread from '../components/DisqusThread';

class Detail extends Component {

    render() {
        return (
            <Layout>
                <Header />
                <Main>
                    <PostDetail params={this.props}/>
                    <DisqusThread />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default Detail;