import api from "../helper/api";
import {FETCH_DATA, GET_MATRIX} from "../helper/constant";


export const fetchData = () => async dispatch => {
    console.log('fetchdata')
    try {
        const result = await api.get('init')
        if (result.data) {
            let count = 0
            let width = result.data.width
            let height = result.data.height
            let tempMatrix = Array.from(Array(width).fill([0,0,0]), ()=> new Array(height).fill([0,0,0]))
            dispatch({type: FETCH_DATA, payload: result.data, matrixData: tempMatrix, count: count})
        }
    } catch (e) {
        console.log('cant get data')
    }
}

export const getMatrix = (i,j) => dispatch =>{
    console.log(i, j)
    dispatch(
        {
            type: GET_MATRIX,
            row: i,
            column: j
        }
    )

}