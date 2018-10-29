import { 
    RECEIVE_TWEETS,
    TOGGLE_TWEET,
    ADD_TWEET,
} from "../actions/tweets"

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: likes(state[action.id], action)
                }
            }
        case ADD_TWEET:
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo( state, action )
            }
        default:
            return state
    }
}

const likes = (tweet, action) => 
    action.hasLiked === true
        ? tweet.likes.filter(uid => uid !== action.authedUser)
        : tweet.likes.concat([action.authedUser])

const replyingTo = (state, action) => {
    const {tweet} = action
    return tweet.replyingTo !== null 
        ? {
            ...state,
            [tweet.replyingTo] : {
                ...state[tweet.replyingTo],
                replies: state[tweet.replyingTo].replies.concat([tweet.id])
            }
        }
        : {}
}

export default tweets