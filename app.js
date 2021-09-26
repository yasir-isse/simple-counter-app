const value = document.getElementById("value");
const btnContainer = document.querySelector(".button-container");

btnContainer.addEventListener("click", (e) => {
  // count logic
  if (e.target.textContent === "decrease") value.textContent--;
  if (e.target.textContent === "increase") value.textContent++;
  if (e.target.textContent === "reset") value.textContent = 0;

  //color change logic
  if (value.textContent < 0) {
    value.style.color = "red";
  } else if (value.textContent > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "hsl(209, 61%, 16%)";
  }
});
