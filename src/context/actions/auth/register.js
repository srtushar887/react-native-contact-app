import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS, CLEAR_AUTH_STATE } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"


export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
};

export const userRegister = ({ email, password, userName: username, firstName: first_name, lastName: last_name }) => dispatch => (onSuccess) => {
    dispatch({
        type: REGISTER_LOADING
    })
    axiosInstance.post('/user/signup', {
        email, password, username, first_name, last_name
    }).then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        console.log(onSuccess);
    }).catch((err) => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { error: 'something went wrong' }
        });
        console.log("api error");
    });
}