// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  return products.filter((product) => product.quantity > 0);
}
// ใช้ filter เพื่อกรองเฉพาะสินค้าที่มี quantity มากกว่า 0
// (product คือparameter ที่แทนแต่ละ Object ใน Array products ขณะที่ .filter() วน Loop))
// ตัวอย่างการใช้งาน
const products = [
  { name: 'apple', quantity: 2 },
  { name: 'banana', quantity: 0 },
  { name: 'orange', quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
