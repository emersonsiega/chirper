import { 
    saveLikeToggle
} from "../utils/api";

const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
const TOGGLE_TWEET = 'TOGGLE_TWEET'

const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets,
})

const toggleTweet = ({id, authedUser, hasLiked}) => ({
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
})

const handleToggleTweet = info => dispatch => {
    dispatch( toggleTweet(info) )

    return saveLikeToggle(info)
        .catch(err => {
            console.warn('Error in handleToggleTweet: ', err)
            dispatch(toggleTweet(info))
            alert('There was an error liking the tweet. Try again!')
        })
}

export {
    RECEIVE_TWEETS,
    TOGGLE_TWEET,
    receiveTweets,
    handleToggleTweet,
}