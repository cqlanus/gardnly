import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar/Navbar'
import PlannerPage from './components/PlannerPage/PlannerPage'

Amplify.configure(aws_exports)

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PlannerPage />
            </div>
        )
    }
}

export default App
