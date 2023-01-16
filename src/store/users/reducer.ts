import { FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./constants";
import { InitialProps } from "../../interfaces";

const initialState: InitialProps = {
    users: [],
    loading: true,
    error: ''
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state
    }
}

export default reducer