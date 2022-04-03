import {useEffect} from "react";
import {fetchData, getMatrix} from "../action";
import {useDispatch, useSelector} from "react-redux";
import InformationSection from "./InformationSection";
import GameSection from "./GameSection";


const Main = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state?.UserDataReducer?.userData)
    // const arrRow = new Array(userData.width).fill([0,0,0])
    // const arrColumn = Array(userData.height).fill([0,0,0])
    // const temp =  Array(userData.width).fill(arrColumn)
    const temp = Array.from(Array(userData.width).fill([0,0,0]), () => new Array(userData.height).fill([0,0,0]))

    useEffect(() => {
        fetchData()(dispatch)
    },[])

    useEffect(() => {
        getMatrix(temp)(dispatch)
    },[userData])


    return(
        <>
            <InformationSection/>
            <GameSection/>
        </>
    )
}

export default Main