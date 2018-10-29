import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
    state = {
        text: "",
        toHome: false,
    }

    handleChange = e => {
        const text = e.target.value

        this.setState({
            text: text
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const {text} = this.state
        const {dispatch, id} = this.props

        dispatch( handleAddTweet(text, id) )
            .then(() => this.setState({
                text: "",
                toHome: id ? false : true
            }))
    }

    render() {
        const { text, toHome } = this.state

        if ( toHome === true ) {
            return <Redirect to='/' />
        }

        const tweetMaxLength = 280
        const tweetLeft = tweetMaxLength - text.length

        return (
            <div>
                <h3 className="center title">Compose new Tweet</h3>
                <form className="new-tweet" onSubmit={(e) => this.handleSubmit(e)}>
                    <textarea
                        className="textarea"
                        maxLength={tweetMaxLength}
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button 
                        className="btn" 
                        type="submit"
                        disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)