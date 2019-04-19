import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';
import BannerHeader from '../components/BannerHeader';

class Tag extends Component {
    render(){
        return (
            <Layout>
                <BannerHeader />
                <Main>
                    <PostList params={this.props} />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
