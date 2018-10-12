import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from './aws-exports'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PlannerPage from './components/PlannerPage/PlannerPage'
import StartGardenPage from './components/StartGardenPage/StartGardenPage'
import PlanBedPage from './components/PlanBedPage/PlanBedPage'
// import Login from './components/LandingPage/Login'
// import Signup from './components/LandingPage/Signup'
import LandingPage from './components/LandingPage/LandingPage'

Amplify.configure(aws_exports)
console.log({ withAuthenticator })

class App extends Component {
    // componentDidMount() {
    //     Auth.currentAuthenticatedUser().then(console.log)
    // }
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to={'/landing'} />}
                        />
                        <Route path="/landing" component={LandingPage} />
                        <Route path="/start" component={StartGardenPage} />
                        <Route path="/bed" component={PlanBedPage} />
                        <Route path="/plan" component={PlannerPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
