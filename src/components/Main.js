import {useEffect} from "react";
import {fetchData, getMatrix} from "../action";
import {useDispatch, useSelector} from "react-redux";
import InformationSection from "./InformationSection";
import GameSection from "./GameSection";


const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()(dispatch)
    },[])



    return(
        <>
            <InformationSection/>
            <GameSection/>
        </>
    )
}

export default Main