import { 
    RECEIVE_TWEETS,
    TOGGLE_TWEET,
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
        default:
            return state
    }
}

const likes = (tweet, action) => 
    action.hasLiked === true
        ? tweet.likes.filter(uid => uid !== action.authedUser)
        : tweet.likes.concat([action.authedUser])


export default tweets