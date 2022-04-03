import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import '../style/GameSection.scss'
import {getMatrix} from "../action";


const GameSection = () => {
    const dispatch = useDispatch()
    // const [[width, height], setData] = useState([0,0])
    const [top, setTop] = useState([0, [0, 0, 0]])
    const [right, setRight] = useState([0, [0, 0, 0]])
    const [bottom, setBottom] = useState([0, [0, 0, 0]])
    const [left, setLeft] = useState([0, [0, 0, 0]])
    const [clickCount, setClickCount] = useState(0)
    // const [twoDeArr, setTwoDeArr] = useState([])

    const matrix = useSelector(state => state?.GameReducer?.newMatrix)
    const userData = useSelector(state => state?.UserDataReducer?.userData)
    const arrRow = new Array(userData.width).fill([0, 0, 0])
    const arrColumn = new Array(userData.height).fill([0, 0, 0])
    // const temp =  new Array(userData.width).fill(arrColumn)
    console.log('matrix', matrix)


    const handleClick = (location, index) => {
        if (clickCount === 0) {
            location([index, [255, 0, 0]])
            setClickCount(clickCount + 1)
        } else if (clickCount === 1) {
            location([index, [0, 255, 0]])
            setClickCount(clickCount + 1)
        } else if (clickCount === 2) {
            location([index, [0, 0, 255]])
            setClickCount(clickCount + 1)
        }
    }

    const matrixColor = () => {
        if (!!matrix) {
            let newMatrix = [...matrix]
            for (let i = 0; i < userData.height; i++) {
                newMatrix[top[0]][i] = top[1].map((value) => value * (userData.height - i) / (userData.height + 1))
            }
            for (let i = userData.height - 1; i >= 0; i--) {
                newMatrix[bottom[0]][i] = bottom[1].map((value) => value * i / (userData.height + 1))
            }
            for (let i = userData.width - 1; i >= 0; i--) {
                newMatrix[i][right[0]] = right[1].map((value) => value * i / (userData.width + 1))
            }
            for (let i = 0; i < userData.width; i++) {
                newMatrix[i][left[0]] = left[1].map((value) => value * (userData.width - i) / (userData.width + 1))
            }
            getMatrix(newMatrix)(dispatch)
        }
    }


    useEffect(() => {
        matrixColor()

    }, [top, right, bottom, left])

    return (
        <div className='gameSection'>
            <div className='arrRowContainer'>
                {arrRow?.map((value, index) => {
                    return (
                        <div className='circleSource' key={index} onClick={() => {
                            handleClick(setTop, index)
                        }}
                             style={index === top[0] ? {backgroundColor: `rgb(${top[1].join(',')})`} : {backgroundColor: "black"}}> </div>
                    )
                })}
            </div>

            <div className='midSection'>

                <div className='leftSection'>
                    {arrColumn.map((value, index) => {
                        return (
                            <div className='circleSource' key={index} onClick={() => handleClick(setLeft, index)}
                                 style={index === left[0] ? {backgroundColor: `rgb(${left[1].join(',')})`} : {backgroundColor: "black"}}> </div>
                        )
                    })}
                </div>

                <div className='tileContainer'>
                    {
                        matrix?.map((eachRow, rowKey) => {
                            return (
                                <div className='matrixRow' key={rowKey}>
                                    {eachRow?.map((each, columnKey) => {
                                        return (
                                            <div className='matrixColumn' key={columnKey}
                                                 onClick={() => console.log('rowKey,columnKey', [rowKey, columnKey])}
                                                 style={{backgroundColor: `rgb(${each?.join(',')})`}}
                                            > </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='rightSection'>
                    {arrColumn.map((value, index) => {
                        return (
                            <div className='circleSource' key={index} onClick={() => handleClick(setRight, index)}
                                 style={index === right[0] ? {backgroundColor: `rgb(${right[1].join(',')})`} : {backgroundColor: "black"}}> </div>
                        )
                    })}
                </div>

            </div>
            <div className='arrRowContainer'>
                {arrRow.map((value, index) => {
                    return (
                        <div className='circleSource' key={index} onClick={() => handleClick(setBottom, index)}
                             style={index === bottom[0] ? {backgroundColor: `rgb(${bottom[1].join(',')})`} : {backgroundColor: "black"}}> </div>
                    )
                })}
            </div>

        </div>
    )
}

export default GameSection