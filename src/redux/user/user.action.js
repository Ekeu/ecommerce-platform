import { UserActionTypes } from './user.types'

/**
 * 
 * @param {object} user 
 * @returns {object} Returns a user action object
 */
export const setCurentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})