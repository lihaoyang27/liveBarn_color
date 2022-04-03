import {FETCH_DATA} from "../helper/constant";

const initState = {
    userData: {

    }
}

export const UserDataReducer = (state = initState, action) => {
    const {type, payload} = action

    switch (type){
        case FETCH_DATA:
            return {...state, userData:payload}

        default:
            return state
    }

}
