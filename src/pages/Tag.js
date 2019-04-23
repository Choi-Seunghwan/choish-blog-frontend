import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import PostList from '../components/PostList';
import TagHeader from '../components/TagHeader';

class Tag extends Component {
    render(){
        return (
            <Layout>
                <TagHeader params={this.props}/>
                <Main>
                    <PostList params={this.props} />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
