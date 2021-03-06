import React, { Component } from 'react';
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout';
import Main from '../components/layout/Main';
import MyAbout from '../components/MyAbout';
import Header from '../components/layout/Header';
class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Layout>
                <Header  title={"About Choi Seunghwan."} />
                <Main>
                    <MyAbout />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export default About;