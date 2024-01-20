const catalog = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked !== true) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
            catalog.push(potteryObj)
        } else {
            potteryObj.price = 20
            catalog.push(potteryObj)
        }
    }

    return potteryObj
}

export const usePottery = () => {
    return catalog
}