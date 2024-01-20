export const firePottery = (potteryObj, temp) => {
    // Adds a new property to object stating that it's gone through the kiln
    potteryObj.fired = true
    
    // Determines if the temp was high enough to crack the pottery or not
    if (temp > 2200) {
        potteryObj.cracked = true
    } else {
        [potteryObj.cracked = false]
    }

    return potteryObj
}