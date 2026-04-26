// Question #8: Fetching User List from Server

async function fetchUserList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const newUserList = data.map((user) => user.name);
  return newUserList;
}
async function main() {
  const result = await fetchUserList();
  console.log(result);
}
main();
// ใช้ fetch เพื่อดึงข้อมูลจาก API และใช้ .json() เพื่อแปลงข้อมูลเป็น JavaScript Object
// จากนั้นใช้ .map() เพื่อสร้าง Array ใหม่ที่มีเฉพาะชื่อของผู้ใช้ (name) โดยการเข้าถึง property name ของแต่ละ user ใน data
