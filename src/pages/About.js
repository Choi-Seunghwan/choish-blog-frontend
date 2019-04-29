import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import SideMenu from '../components/SideMenu';
import MyAbout from '../components/MyAbout';
import Header from '../components/Header';
class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Layout>
                <Header  title={"About me"} />
                <SideMenu />
                <Main>
                    <MyAbout />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default About;