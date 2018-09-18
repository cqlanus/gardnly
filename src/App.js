import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
// import './App.css'
import 'semantic-ui-css/semantic.min.css'
import SidebarNav from './components/Sidebar/Sidebar'
import PlannerPage from './components/PlannerPage/PlannerPage'

Amplify.configure(aws_exports)

class App extends Component {
    render() {
        return (
            <div>
                <SidebarNav />
                <PlannerPage />
            </div>
        )
    }
}

export default App
