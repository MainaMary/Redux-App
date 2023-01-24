import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER, POST_USER,GET_SINGLE_USER, EDIT_USER } from "./constants"
import { UserProps } from "../../interfaces"
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
export const postUser =()=>({
    type:POST_USER
})
export const getSingleUser = (user:UserProps)=>({type:GET_SINGLE_USER, payload:user})
export const editSingleuser = () => ({type:EDIT_USER})