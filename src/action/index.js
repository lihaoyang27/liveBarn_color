import api from "../helper/api";
import {FETCH_DATA, GET_MATRIX} from "../helper/constant";


export const fetchData = () => async dispatch => {
    console.log('fetchdata')
    try {
        const result = await api.get('init')
        if (result.data) {
            dispatch({type: FETCH_DATA, payload: result.data})
        }
    } catch (e) {
        console.log('cant get data')
    }
}

export const getMatrix = (matrix) => dispatch =>{
    dispatch({type:GET_MATRIX, payload: matrix})
    console.log('action',matrix)

}