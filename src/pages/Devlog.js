import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import BannerHeader from '../components/BannerHeader';
import DevLogList from '../components/DevLogList';

class Tag extends Component {
    render(){
        return (
            <Layout>
                <BannerHeader params={this.props} title={"DevLog"} subtitle={"DevLog..."}/>
                <Main>
                    <DevLogList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
