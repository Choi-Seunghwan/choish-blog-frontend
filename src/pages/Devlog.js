import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import BannerHeader from '../components/BannerHeader';
import SideMenu from '../components/SideMenu';
import DevlogList from '../components/DevlogList';

class Tag extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return (
            <Layout>
                <BannerHeader params={this.props} title={"DevLog"} subtitle={"기록되지 않은 것은 기억되지 않는다"}/>
                <SideMenu />
                <Main>
                    <DevlogList />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}


export default Tag;
