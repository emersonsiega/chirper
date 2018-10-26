import { combineReducers } from "redux"
import users from "../reducers/users"
import tweets from "../reducers/tweets"
import authedUser from "../reducers/authedUser"

const rootReducer = combineReducers({
    authedUser,
    users,
    tweets,
})

export default rootReducer