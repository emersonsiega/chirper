import { getInitialData } from '../utils/api'
import { receiveUsers } from "../actions/users"
import { receiveTweets } from "../actions/tweets"
import { setAuthedUser } from "../actions/authedUser"

const AUTHED_ID = 'emersonsiega'

const handleInitialData = () => dispatch => 
    getInitialData().then(({users, tweets}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
    })

export {
    AUTHED_ID,
    handleInitialData,
}