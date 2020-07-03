// Define Grocery Class
class Grocery{
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getTotal(){
        return (this.quantity * this.price).toFixed(2);
    }
}

// Creating Object Array
let groceryArray: Array<Object>;

// Creating Grocery objects
let bananas = new Grocery('Milk', 4, 0.22);
let apples = new Grocery('Bread', 3, 1.34);
let oranges = new Grocery('Eggs', 7, 0.53);

// Adding objects to object array
groceryArray = [bananas, apples, oranges]

// Getting list element from DOM
let list = document.getElementById('groceries');

// Adding items to a list
groceryArray.forEach(
    function(item: Grocery){
        let node = document.createElement('li');
        node.textContent = `Item: ${item.name}, Item Price: ${item.price}, Item Count: ${item.quantity}, Item Total Price: ${item.getTotal()}`;
        list.appendChild(node);
    }
);
