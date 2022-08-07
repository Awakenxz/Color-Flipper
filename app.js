const colors = ["green", "red", "rgba(133,122,200", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // GET A RANDOM COLOR FROM ARRAY
  const randomElement = colors[Math.floor(Math.random() * colors.length)];
  //DISPLAY COLOR IN BACKGROUND
  document.body.style.backgroundColor = randomElement;
  color.textContent = randomElement;
  /* ANOTHER WAY
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  function getRandomNumber() {
    colors[Math.random()];
   return Math.floor(Math.random() * colors.length);
  }*/
});
