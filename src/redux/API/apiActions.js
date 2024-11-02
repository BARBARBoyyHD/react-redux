import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_ERROR } from "./apiTypes";
import axios from "axios";

const fetchApiRequest = ()=>{
    return{
        type:FETCH_API_REQUEST
    }
}
const fetchApiSuccess = (data)=>{
    return{
        type:FETCH_API_SUCCESS,
        payload:data
    }
}

const fetchApiError = (error)=>{
    return{
        type:FETCH_API_ERROR,
        payload:error
    }
}

export const fetchUser = ()=>{
    return (dispatch)=>{
        dispatch(fetchApiRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
              }));
            dispatch(fetchApiSuccess(users))
            console.log(users);
        })
        .catch(error =>{
            dispatch(fetchApiError(error.message))
        })
    }
}