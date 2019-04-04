import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';

class Detail extends Component {

    render() {
        return (
            <Layout>
                <Header />
                <Main />
            </Layout>
        )
    }
}

export default Detail;