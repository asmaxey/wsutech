// this is the javascript index for the counter project

// this designates the buttons as variables and defines the starting value
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

// this tells the program what to do with the count total when a button is clicked
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
