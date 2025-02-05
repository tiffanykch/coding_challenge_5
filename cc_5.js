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