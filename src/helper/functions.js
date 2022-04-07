

export const displayColors = (temp, tempUserData, row, column) => {
    //Get the difference between two squares
    // (255 - 0)/height or width
    let a0 = Math.abs(temp[column][0][0] - temp[column][tempUserData.height - 1][0]) / tempUserData.height
    let a1 = Math.abs(temp[column][0][1] - temp[column][tempUserData.height - 1][1]) / tempUserData.height
    let a2 = Math.abs(temp[column][0][2] - temp[column][tempUserData.height - 1][2]) / tempUserData.height

    let b0 = Math.abs(temp[0][row][0] - temp[tempUserData.width - 1][row][0]) / tempUserData.width
    let b1 = Math.abs(temp[0][row][1] - temp[tempUserData.width - 1][row][1]) / tempUserData.width
    let b2 = Math.abs(temp[0][row][2] - temp[tempUserData.width - 1][row][2]) / tempUserData.width

    //using for loop to do 255-(minimumValue * i)
    if (column !== 0 && column !== tempUserData.width - 1) {
        for (let i = 0; i < tempUserData.height - 1; i++) {
            if(i !==  tempUserData.height - 1 ){
                temp[column][i] = [Math.abs(temp[column][0][0] - a0 * i),
                    Math.abs(temp[column][0][1] - a1 * i),
                    Math.abs(temp[column][0][2] - a2 * i)]
            }
            else{
                temp[column][tempUserData.height - 1 - i] = [Math.abs(temp[column][0][0] - a0 * i),
                    Math.abs(temp[column][0][1] - a1 * i),
                    Math.abs(temp[column][0][2] - a2 * i)]
            }
        }
    }

    if (row !== 0 && row !== tempUserData.height - 1) {
        for (let i = 0; i < tempUserData.width - 1; i++) {
            if(i !== tempUserData.width - 1){
                temp[i][row] = [Math.abs(temp[0][row][0] - b0 * i), Math.abs(temp[0][row][1] - b1 * i), Math.abs(temp[0][row][2] - b2 * i)]

            }
            else{
                temp[tempUserData.width - 1 - i][row] = [Math.abs(temp[0][row][0] - b0 * i), Math.abs(temp[0][row][1] - b1 * i), Math.abs(temp[0][row][2] - b2 * i)]
            }

        }
    }

}