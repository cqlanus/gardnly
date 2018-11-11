// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import 'semantic-ui-css/semantic.min.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './App.css'
import Authenticator from './components/Auth/Authenticator'
import Splash from './components/Splash/Splash'
import Home from './components/Home/Home'
import { getProfile } from './redux/auth'
import PlanBedPage from './components/PlanBedPage/PlanBedPage'
import NavBar from './components/Navbar/Navbar'

Amplify.configure(aws_exports)

type Props = {
    user: any,
    getProfile: () => void,
    authState: string,
    onStateChange: (string, any) => void,
}

class App extends Component<Props> {
    componentDidMount() {
        const { getProfile } = this.props
        getProfile()
    }

    renderApp = () => {
        const { authState, onStateChange, user } = this.props
        return (
            <div className="app">
                {user && <NavBar />}
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        render={props => (
                            <Splash {...props} authState={authState} />
                        )}
                    />
                    <Route
                        path={'/login'}
                        render={props => (
                            <Authenticator {...props} authState={authState} />
                        )}
                    />
                    <Route
                        path={'/home'}
                        render={props => (
                            <Home
                                {...props}
                                user={user}
                                onStateChange={onStateChange}
                                authState={authState}
                            />
                        )}
                    />
                    <Route path={'/garden/:gardenId'} component={PlanBedPage} />
                    {<Redirect to={'/'} />}
                </Switch>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Router>{this.renderApp()}</Router>
                <ReduxToastr
                    position={'bottom-right'}
                    transitionIn={'fadeIn'}
                    transitionOut={'fadeOut'}
                />
            </div>
        )
    }
}

const mapState = state => {
    return {
        user: state.auth.profile,
    }
}

const mapDispatch = {
    getProfile,
}

export default connect(
    mapState,
    mapDispatch,
)(App)
