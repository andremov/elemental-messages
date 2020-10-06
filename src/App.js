import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/LoginPage";

export class App extends Component {
    
    state = {
        userData : undefined
    }
    
    render() {
        const { userData } = this.state;
        
        if ( !userData ) {
            return (
                <LoginPage
                    onSuccessCallback={( userData ) => this.setState(userData)}
                />
            )
        }
        
        return (
            <Switch>
                <Route path="/" render={( props ) => {
                    return (
                        <LandingPage {...props} />
                    )
                }} />
            </Switch>
        );
    }
}
