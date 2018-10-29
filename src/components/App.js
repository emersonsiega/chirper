import React, { Component } from 'react'
import { connect } from "react-redux"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from "react-redux-loading"

import { handleInitialData } from "../actions/shared"
import Nav from './Nav'
import Dashboard from "./Dashboard"
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch( handleInitialData() )
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>}
          </div>
        </>
      </Router>
    )
  }
}

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App)