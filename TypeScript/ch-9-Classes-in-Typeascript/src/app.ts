console.log("Access Modifiers in TypeScript");

// Base class
class Product {
    public id: number;              // accessible anywhere
    public name: string;            // accessible anywhere
    protected price: number;        // accessible in this class + subclasses
    private inCart: boolean = false; // only inside this class
    private isOrdered: boolean = false; // only inside this class

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Add to cart method
    public addToCart(): void {
        if (this.inCart) {
            console.log(`${this.name} is already in the cart.`);
        } else {
            this.inCart = true;
            console.log(`${this.name} has been added to the cart.`);
        }
    }

    // Buy product method
    public buyProduct(): string {
        if (this.inCart) {
            this.isOrdered = true;
            return `✅ Product "${this.name}" purchased successfully for ₹${this.price}.`;
        } else {
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
    public applyDiscount(discount: number): void {
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
console.log(order.name);        // ✅ public works
