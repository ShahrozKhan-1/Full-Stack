const dishData = [
    { name: 'Dish1', price: 10 },
    { name: 'Dish2', price: 20 },
    { name: 'Dish3', price: 30 }
];

const tax = 1.2;

function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        } 
        else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } 
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(dishData[i].name + " Price: " + finalPrice);
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === "number" && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log("Discount is: ", discount);
    } 
    else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

getDiscount(true, 2);
getDiscount(false, 10);