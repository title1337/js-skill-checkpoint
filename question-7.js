// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 700 },
];

const secondProductList = [
  { id: 3, name: 'Tablet', price: 500 },
  { id: 4, name: 'Headphones', price: 150 },
];

function mergeProductLists(list1, list2) {
  return [...list1, ...list2];
}
// ใช้ Spread Operator (...) เพื่อรวม Array list1 และ list2 เข้าด้วยกัน
// ตัวอย่างการใช้งาน
const mergedProductList = mergeProductLists(
  firstProductList,
  secondProductList,
);
console.log(mergedProductList);

// อาจจะใช้ for...of + .push() ได้???
