import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';

class Tag extends Component {
    render(){
        return (
            <Layout>
                <Header />
                <Main>
                    <PostList params={this.props} />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
