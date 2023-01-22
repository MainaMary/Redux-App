import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER } from "./constants"

export const fetchUsersBegin = () => ({ type: FETCH_USERS_BEGIN })

export const fetchUsersSuccess = (users: any) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (error: string) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
})
export const deleteSingleUser = ()=>({
    type: DELETE_USER,
    
})