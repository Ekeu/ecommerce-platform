/**
 * 
 * @param {object} user 
 * @returns {object} Returns a user action object
 */
export const setCurentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})