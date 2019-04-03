import React, { Component } from 'react';
import PropType from 'prop-types';
import Header from '../components/Header'
import Layout from '../components/Layout';
import Main from '../components/Main';

class Home extends Component {
    render(){
        return (
            <Layout>
                <Header />
                <Main>
                    <p>loreom efoemf ekfwj emelf eof en fen finefinef nfei
                        efiemf efim eifmim
                    </p>
                    <p>loreom efoemf ekfwj emelf eof en fen finefinef nfei
                        efiemf efim eifmim
                    </p>
                </Main>
            </Layout>
        );
    }
    
}

Home.defaultProps = {
    title: "Seunghwan Tech Blog"
}

Home.PropType = {
    title: PropType.string
}


export default Home;