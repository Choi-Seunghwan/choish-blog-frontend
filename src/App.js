import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Detail, Tag, Test } from './pages';



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/detail" component={Detail} />
                <Route path="/Tag" component={Tag} />
                <Route path="/test" component={Test} />
                </Switch>
            </Router>
        );
    }
}

export default App;
