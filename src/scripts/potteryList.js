import { usePottery } from "./potteryCatalog.js"

// Creates HTML representation of pottery objects available to sell
export const PotteryList = () => {
    const inventory = usePottery()

    // Initializes HTML String to return
    let htmlString = ""

    // Iterates through each object of the passed in array to generate HTML
    for (const item of inventory) {
        htmlString += `
        <section class="pottery" id="pottery--${item.id}">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>`
    }

    return htmlString
}