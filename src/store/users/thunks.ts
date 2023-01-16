import axios from "axios";
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersBegin } from "./actions";

export const fetchUsers = () => {
    return async function (dispatch: any) {
       
        try {
            dispatch(fetchUsersBegin())
            const response = await axios("https://reactjs-test.prestoapi.com/api/users")
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