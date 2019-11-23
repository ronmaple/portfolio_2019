import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Dev from '../pages/Dev';
import Resume from '../pages/Resume';


export default class Body extends Component {
    render() {
        return (
            <Switch>

                <div className="main">
                    <Route exact path="/">
                        <Dev />
                    </Route>
                    <Route path="/Resume">    
                        <Resume />
                    </Route>
                </div>
            </Switch>
        )
    }
}
