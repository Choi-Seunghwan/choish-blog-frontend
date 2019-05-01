import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import PostList from '../components/post/PostList';
import TagHeader from '../components/layout/TagHeader';
import SideMenu from '../components/layout/SideMenu';

class Tag extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <TagHeader params={this.props}/>
                <SideMenu />
                <Main>
                    <PostList params={this.props} />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
