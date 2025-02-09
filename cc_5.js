//TASK 1: OBJECT PROPERTIES - CUSTOMER PROFILE

//Declare object containing customer information
let customer = {
    name: "Jane Doe",
    age: 35,
    email: "john.doe@email.com"
};

//Use for...in loop to iterate through object properties
for (let property in customer) {

    //Log each property and value to the console using template literal
    console.log(`${property}: ${customer[property]}`)
};

//TASK 2: OBJECT METHODS - ORDER DETAILS

//Declare object containing order details
let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",

    //Add method to log order details to the console
    displayOrder: function() {
        console.log("Order ID:", this.orderID),
        console.log("Total Amount:", this.totalAmount),
        console.log("Status:", this.status) 
    }
};

//Calling method to display order details
order.displayOrder()

//TASK 3: ARRAY MANIPULATION - SHOPPING CART

//Declare array containing three product names
let cartItems = ["Bananas", "Apples", "Strawberries"];

//Add new product to array
cartItems.push("Cabbage")

//Remove last item in array
cartItems.pop()

//Add item in the beginning of array
cartItems.unshift("Tomatoes");

//Remove first item in array
cartItems.shift()

//Log final array to the console
console.log("Cart Items:", cartItems)

//TASK 4: MAP METHOD - PRICE ADJUSTMENTS

//Declare array containing price details
prices = [100, 200, 300]

//Apply a 10% discount to each price using .map()
let discountedPrices = prices.map(price => price * 0.9)

//Log new discounted prices to the console
console.log("Discounted Prices:", discountedPrices)

//TASK 5: FILTER METHOD - PRODUCT AVAILABILITY

//Declare array containing five product quantities
let inventory = [3, 6, 23, 62, 0, 12]

//Remove products with zero stock using .filter()
let availableInventory = inventory.filter(quantity => quantity > 0)

//Log filtered array to the console
console.log("Available Inventory:", availableInventory)

//TASK 6: REDUCE METHOD - REVENUE CALCULATION

//Declare array containing sales data
let sales = [500, 300, 200, 400]

//Calculate total revenue using .reduce() method
let totalRevenue = sales.reduce((total, sale) => total + sale, 0)

//Log total revenue to the console
console.log("Total Revenue: $" + totalRevenue)

//TASK 7: FIND() METHOD - CUSTOMER SEARCH

//Declare array containing customer names
let customers = ["Alice", "Bob", "Charlie", "David"]

//Locate "Charlie" using .find() method and log result to the console
console.log(customers.find(customer => customer === "Charlie"))