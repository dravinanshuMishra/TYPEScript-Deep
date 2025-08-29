"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("classes in TypeScript :: create a add to cart any product.");
console.log("Classes in TypeScript :: Add to Cart Example.");
// Step 1: Create a class
class Product {
    id;
    name;
    price;
    inCart = false;
    isOrdered = false;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Add to cart method
    addToCart() {
        this.inCart = true;
        console.log(`${this.name} has been added to cart.`);
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
// Step 2: Use the class, choose product, add product and buy product 3 steps.
const product1 = new Product(101, "Samsung", 25000);
product1.addToCart();
console.log(product1.buyProduct());
const product2 = new Product(301, "iPhone", 250000);
product2.addToCart();
console.log(product2.buyProduct());
