import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./constants"

export const fetchUsersBegin = () => ({ type: FETCH_USERS_BEGIN })

export const fetchUsersSuccess = (users: any) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (error: string) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
})