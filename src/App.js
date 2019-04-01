import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Header from './components/Header';
import Footer from './components/Footer';
import { Home, About } from './pages';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <Header/> */}
                    <div>
                        <Route exact path="/" component={Home} />
                        <Switch>
                            <Route path="/about" component={About} />
                            {/* <Router component={NoMatch} /> */}
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
