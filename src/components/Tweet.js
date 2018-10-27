import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    TiArrowBackOutline,
    TiHeartOutline,
    TiHeartFullOutline
} from "react-icons/ti"

import { 
    formatTweet,
    formatDate
} from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";

class Tweet extends Component {

    toParent = (e, id) => {
        e.preventDefault()

        //TODO: Redirect
    }

    handleLike = (e) => {
        e.preventDefault()

        const {dispatch, tweet, authedUser} = this.props

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }))
    }

    render() {
        const { tweet } = this.props

        if ( tweet === null ) {
            return <p>This Tweet doesn't exists</p>
        }

        const {
            name, text, avatar, timestamp, hasLiked, likes, replies, parent,
        } = tweet

        return (
            <div className='tweet'>
                <img
                    className='avatar'
                    src={avatar}
                    alt={`Avatar of ${name}`}
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        { parent && (
                            <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon'/>
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={(e) => this.handleLike(e)}>
                            { hasLiked === true 
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                                : <TiHeartOutline className='tweet-icon' />}
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users, tweets, authedUser}, {id}) => {
    const tweet = tweets[id]
    const parentTweet = tweet 
        ? tweets[tweet.replyingTo]
        : null
    
    return {
        authedUser,
        tweet: tweet 
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null, 
    }
}

export default connect(mapStateToProps)(Tweet)