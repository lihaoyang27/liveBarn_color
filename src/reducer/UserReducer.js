import {FETCH_DATA, GET_MATRIX} from "../helper/constant";
import {displayColors} from "../helper/functions";

const initState = {
    userData: {},
    count: 0,
    matrixData: [],
}

export const UserDataReducer = (state = initState, action) => {
    const {type, payload, matrixData, count} = action

    switch (type){
        case FETCH_DATA:
            return {...state, userData:payload, matrixData: matrixData, count: count}

        case GET_MATRIX:
            let tempUserData = {...state.userData}
            let temp = [...state.matrixData]
            let tempCount = state.count;
            let row = action?.row;
            let column = action?.column;

            if ((row === 0 && column === 0) || (column === 0 && row === tempUserData.height - 1)
                || (column === tempUserData.width - 1 && row === 0)
                || (row === tempUserData.height - 1 && column === tempUserData.width - 1)) {
                temp = [...state.matrixData]
            } else if (row !== 0 && row !== tempUserData.height - 1
                && column !== 0 && column !== tempUserData.width - 1) {
                temp = [...state.matrixData];

            } else {
                if (tempCount === 0) {
                    temp[action?.column][action?.row] = [255, 0, 0];
                    displayColors(temp, tempUserData, row, column);
                    tempCount = tempCount + 1;
                } else if (tempCount === 1) {
                    temp[action?.column][action?.row] = [0, 255, 0];
                    displayColors(temp, tempUserData, row, column);
                    tempCount = tempCount + 1;
                } else if (tempCount === 2) {
                    temp[action?.column][action?.row] = [0, 0, 255];
                    displayColors(temp, tempUserData, row, column);
                    tempCount = tempCount + 1;
                } else {
                    temp = [...state.matrixData];
                }
            }
            return {...state, matrixData: temp, count: tempCount}

        default:
            return state
    }

}
