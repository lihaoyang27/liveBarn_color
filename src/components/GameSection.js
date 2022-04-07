import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import '../style/GameSection.scss'
import {getMatrix} from "../action";


const GameSection = () => {
    const userData = useSelector(state => state?.UserDataReducer?.userData)
    const matrixData = useSelector(state => state?.UserDataReducer?.matrixData)
    const width = userData?.width;
    const height = userData?.height;
    const dispatch = useDispatch();


    return (
        <div className='gameContainer' >
            {
                [...Array(height)].map((item, i) => (
                    <div className='rowContainer'  key={i}>
                        {
                            [...Array(width)].map((it, j) => (
                                <div key={j}
                                     style={{
                                         backgroundColor: matrixData.length > 0 ? `rgb(${matrixData[j][i].join(',')})` : 'black',
                                         margin: '5px',
                                         height: '20px',
                                         width: '20px',
                                         borderRadius: (i === 0 || j === 0 || i === height - 1 || j === width - 1) ? '50%' : 0,
                                         opacity: ((i === 0 && j === 0) || (i === height - 1 && j === 0) || (i === 0 && j === width - 1) || (i === height - 1 && j === width - 1)) && '0',
                                         cursor: (i === 0 || j === 0 || i === height - 1 || j === width - 1) && 'pointer',
                                         color: 'white'
                                     }}
                                     onClick={() => getMatrix(i, j)(dispatch)}>{i}{j}</div>))}
                    </div>))
            }
        </div>
    )
}
export default GameSection