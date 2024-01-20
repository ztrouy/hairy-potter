// Imports go first
import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 3)
let cup = makePottery("cup", 1, 4)
let bowl = makePottery("bowl", 4, 2)
let plate = makePottery("plate", 3, 1)
let vase = makePottery("vase", 6, 8)

console.log(mug)
console.log(cup)
console.log(bowl)
console.log(plate)
console.log(vase)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2100)
cup = firePottery(cup, 2300)
bowl = firePottery(bowl, 2200)
plate = firePottery(plate, 2000)
vase = firePottery(vase, 2250)

console.log(mug)
console.log(cup)
console.log(bowl)
console.log(plate)
console.log(vase)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



