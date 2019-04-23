import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Detail, Tag, Edit, DevLog, Test } from './pages';



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/post/:slug" component={Detail} />
                <Route path="/Tag/:tag" component={Tag} />
                <Route path="/devlog" component={DevLog} />
                <Route path="/edit" component={Edit} />
                <Route path="/test" component={Test} />
                </Switch>
            </Router>
        );
    }
}

export default App;
