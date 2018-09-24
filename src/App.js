import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PlannerPage from './components/PlannerPage/PlannerPage'
import StartGardenPage from './components/StartGardenPage/StartGardenPage'

Amplify.configure(aws_exports)

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to={'/start'} />}
                        />
                        <Route path="/start" component={StartGardenPage} />
                        <Route path="/plan" component={PlannerPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
