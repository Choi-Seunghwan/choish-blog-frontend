import React, { Component } from 'react';
import Footer from '../components/Footer'
import Layout from '../components/Layout';
import Main from '../components/Main';
import EditHeader from '../components/EditHeader';
import MyEditor from '../components/MyEditor';

class Edit extends Component {
    render(){
        return (
            <Layout>
                <EditHeader />
                <Main>
                    <MyEditor />
                </Main>
                <Footer />
            </Layout>
        );
    }
    
}

export default Edit;
