import axios from "axios";
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersBegin, deleteSingleUser, postUser ,  editSingleuser} from "./actions";
import {UserProps } from "../../interfaces/index"
import { baseUrl } from "../../api";

export const fetchUsers = () => {
    return async function (dispatch: any) {
       
        try {
            dispatch(fetchUsersBegin())
            const response = await axios(`/users`)
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
export const deleteUser = (id:string | undefined) =>{
    return async function (dispatch:any){
        try{
            const response = await axios.delete(`/${id}`)
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
            const res = await axios.post(`/user`,payload )
            dispatch(postUser())
            dispatch(fetchUsersSuccess(res.data))
            console.log(res.data)
          
        }
        catch(error:any){
            console.log(error.message)
        }
    }

}
export const fetchSingleUser = (userId:string | undefined)=>{
    return async function(dispatch:any){
        try{
            const response = await axios.get(`/user/${userId}`)
           
            dispatch(fetchUsersSuccess(response.data))
        }
        catch(error:any){
            console.log(error.message);
            
        }

    }
}
export const editUser = (userId:string |undefined, payload:UserProps) =>{
    return async function(dispatch:any){
        try{
            const response = await axios.patch(`/user/${userId}`,payload)
            console.log(response.data,'edit user details')
            dispatch(editSingleuser())
        }
        catch(error:any){
            console.log(error.message)
        }

    }
}