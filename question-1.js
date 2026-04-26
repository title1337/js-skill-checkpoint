// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

inventory.apple.price = 30; // Update the price of apple
inventory.orange = { price: 20, quantity: 300 }; // Add a new item orange to the inventory\

let totalValue = 0;

for (let item in inventory) {
  totalValue += inventory[item].price * inventory[item].quantity;
} // loop cal totalValue

console.log(`Total inventory value: ${totalValue} baht`);
