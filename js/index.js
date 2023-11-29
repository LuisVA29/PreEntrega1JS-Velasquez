alert("Welcome to the Pizzeria!");

let pizzaType;
while (true) {
pizzaType = prompt("What type of pizza would you like?\n1. Pepperoni\n2. Hawaiian\n3. Veggie\n4. Cheese");

if (pizzaType === null || pizzaType === "" || isNaN(pizzaType) || pizzaType < 1 || pizzaType > 4) {
    alert("Please enter a valid option.");
    } else {
    break;
}
}

let pizzaSize;
while (true) {
pizzaSize = prompt("What size of pizza would you like?\n1. Small ($10)\n2. Medium ($15)\n3. Large ($20)");

if (pizzaSize === null || pizzaSize === "" || isNaN(pizzaSize) || pizzaSize < 1 || pizzaSize > 3) {
    alert("Please enter a valid option.");
    } else {
    break;
    }
}

let wantDrink;
while (true) {
wantDrink = prompt("Would you like to add a drink?\n1. Water ($2)\n2. Soda ($3)\n3. Juice ($4)\n4. No, thanks. Complete the order");

if (wantDrink === null || wantDrink === "" || isNaN(wantDrink) || wantDrink < 1 || wantDrink > 4) {
    alert("Please enter a valid option.");
} else {
    break;
    }
}

let pizzaTypeText;
switch (pizzaType) {
    case "1":
    pizzaTypeText = "Pepperoni";
    break;
    case "2":
    pizzaTypeText = "Hawaiian";
    break;
    case "3":
    pizzaTypeText = "Veggie";
    break;
    case "4":
    pizzaTypeText = "Cheese";
    break;
    default:
    pizzaTypeText = "Unknown";
}

let pizzaSizeText;
switch (pizzaSize) {
    case "1":
    pizzaSizeText = "Small";
    break;
    case "2":
    pizzaSizeText = "Medium";
    break;
    case "3":
    pizzaSizeText = "Large";
    break;
    default: 
    pizzaSizeText = "Unknown";
}

let selectedDrink = "";
let drinkPrice = 0;
if (wantDrink !== "4") {
    switch (wantDrink) {
    case "1":
    drinkPrice = 2;
    selectedDrink = "Water";
    break;
    case "2":
    drinkPrice = 3;
    selectedDrink = "Soda";
    break;
    case "3":
    drinkPrice = 4;
    selectedDrink = "Juice";
    break;
}
} else {
    selectedDrink = "None";
}

let pizzaPrice;
switch (pizzaSize) {
    case "1":
    pizzaPrice = 10;
    break;
    case "2":
    pizzaPrice = 15;
    break;
    case "3":
    pizzaPrice = 20;
    break;
}

let totalPrice = pizzaPrice + drinkPrice;

alert(`Order Summary:\nPizza Type: ${pizzaTypeText}\nSize: ${pizzaSizeText}\nDrink: ${selectedDrink}\nTotal Price: $${totalPrice}`);
