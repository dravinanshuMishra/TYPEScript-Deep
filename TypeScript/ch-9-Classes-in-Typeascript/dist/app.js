"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Access Modifiers in TypeScript");
// Base class
class Product {
    id; // accessible anywhere
    name; // accessible anywhere
    price; // accessible in this class + subclasses
    inCart = false; // only inside this class
    isOrdered = false; // only inside this class
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Add to cart method
    addToCart() {
        if (this.inCart) {
            console.log(`${this.name} is already in the cart.`);
        }
        else {
            this.inCart = true;
            console.log(`${this.name} has been added to the cart.`);
        }
    }
    // Buy product method
    buyProduct() {
        if (this.inCart) {
            this.isOrdered = true;
            return `✅ Product "${this.name}" purchased successfully for ₹${this.price}.`;
        }
        else {
            return `⚠️ Product "${this.name}" is not in the cart. Please add first.`;
        }
    }
}
// Child class
class Order extends Product {
    constructor() {
        super(121, "Vivo V21", 25000);
    }
    // Using protected price inside subclass
    applyDiscount(discount) {
        console.log(`Discounted Price of ${this.name}: ₹${this.price - discount}`);
    }
}
// Usage
const order = new Order();
order.addToCart();
console.log(order.buyProduct());
order.applyDiscount(2000); // ✅ uses protected property
// ❌ Direct access errors (uncomment to test)
// console.log(order.inCart);   // Error: private
// console.log(order.isOrdered); // Error: private
// console.log(order.price);    // Error: protected
console.log(order.name); // ✅ public works
