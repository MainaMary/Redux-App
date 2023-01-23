import axios from "axios";
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersBegin, deleteSingleUser, postUser } from "./actions";
import {UserProps } from "../../interfaces/index"

export const fetchUsers = () => {
    return async function (dispatch: any) {
       
        try {
            dispatch(fetchUsersBegin())
            const response = await axios("https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users")
            const users = response.data
            console.log(response)

            dispatch(fetchUsersSuccess(users))
            return response.data
        }
        catch (err: any) {
            console.log(err)
            dispatch(fetchUsersFailure(err.message))
        }

    }
}
export const deleteUser = (id:string) =>{
    return async function (dispatch:any){
        try{
            const response = await axios.delete(`https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users/${id}`)
            dispatch(deleteSingleUser())
            dispatch(fetchUsersSuccess(response.data))
            return response.data
        }
        catch(err:any){
            console.log(`Unable ${err.message}`)
        }
    }
}
export const postSingleUser = (payload:UserProps)=>{
    return async function (dispatch:any){
        console.log(payload,'payload')
        try{
            const res = await axios.post(`https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user`,payload )
            dispatch(postUser())
            console.log(res.data)
        }
        catch(error:any){
            console.log(error.message)
        }
    }

}