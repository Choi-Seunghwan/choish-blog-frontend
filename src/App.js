import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main, About, Test } from './pages';



class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/test" component={Test} />
                    {/* <Router component={NoMatch} /> */}
                </Switch>
            </Router>
        );
    }
}

export default App;
