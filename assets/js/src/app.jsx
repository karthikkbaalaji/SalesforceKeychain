import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ListAccounts from './listAccounts';
import EditAccount from './editAccount';
import Template from './template';
import Store from './store';
import SaveAccounts from './saveAccounts';

export default class App extends React.Component {
    
    render() {
       return (
            <Router history={browserHistory}>
                <Route path="/" component={Template}>
                    <IndexRoute component={ListAccounts} />
                    <Route path="add/:id" component={EditAccount} />
                    <Route path="save" component={SaveAccounts} />
                </Route>
            </Router>  
       );
    }
}