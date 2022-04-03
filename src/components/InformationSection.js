import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../style/InformationSection.scss'







const InformationSection = () => {
    const [rgb, setRgb] = useState('')

    const userData = useSelector(state => state?.UserDataReducer?.userData)

    useEffect(() => setRgb(userData?.target?.join(','))
        ,[userData])




    return(
        <div className='container'>
            <h3>RGB Alchemy</h3>
            <div>User ID: {userData.userId}</div>
            <div>Moves left: </div>
            <div className='target'>
                <div>Target:</div>
                <div className='targetColor' style={{backgroundColor:`rgb(${rgb})`,width:"20px", height:'20px',display:'inline-block'}}/>
            </div>
            <div>Closest color: </div>
        </div >
    )
}

export default InformationSection