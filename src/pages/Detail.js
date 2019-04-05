import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';

class Detail extends Component {

    render() {
        return (
            <Layout>
                <Header />
                <Main>
                    <PostDetail />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default Detail;