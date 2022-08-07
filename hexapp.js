//console.log("hello world");
/*var letters = "1234567890ABCDEF";
var colorz = "#";
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

for (var i = 0; i < 6; i++) {
  colorz += letters[Math.floor(Math.random() * 16)];
}
console.log(colorz);

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = colorz;
  color.textContent = colorz;
});
*/

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//adds a click function to the btn that generates a hex color string and changes backgroundColor and textContent
btn.addEventListener("click", () => {
  let hexColor = "#";
  //Generates a hex string from getRandomNumber
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  //Places the hex string into the textContent and backgroundColor properties
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
// Generates a random letter or number from hex array
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
