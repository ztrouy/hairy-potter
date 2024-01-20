// Variable that keeps track of how much pottery has been made
let potteryIdTally = 0

export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryIdTally + 1
    }

    potteryIdTally++

    return pottery
}