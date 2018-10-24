import {
    _getUsers,
    _getTweets,
    _saveLikeToggle,
    _saveTweet,
} from './_DATA.js'

const getInitialData = () =>
    Promise.all([
        _getUsers(),
        _getTweets(),
    ]).then(([users, tweets]) => ({
        users,
        tweets,
    }))

const saveLikeToggle = info => _saveLikeToggle(info)

const saveTweet = info => _saveTweet(info)

export {
    getInitialData,
    saveLikeToggle,
    saveTweet,
}