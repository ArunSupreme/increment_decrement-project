const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const result = document.getElementById("resultelem");

console.log(increment);
let counter = 0;
increment.addEventListener("click", function () {
  counter = counter + 1;
  result.textContent = counter;
});
decrement.addEventListener("click", function () {
  counter = counter - 1;
  result.textContent = counter;
});
