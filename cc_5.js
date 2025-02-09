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