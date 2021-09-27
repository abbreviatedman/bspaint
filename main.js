// Populate canvas with cells.
const main = document.querySelector("main");
for (let i = 0; i < 400; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Queries I'll need several times.
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const currentColor = document.querySelector("#current-color");
const cells = document.querySelectorAll(".cell");

// When dark mode button is pressed, toggle global dark mode as well as the dark mode indicator.
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeToggle.textContent =
    darkModeToggle.textContent.slice(0, -1) +
    (document.body.classList.contains("dark") ? "✅" : "⬜");
});

// Change whole canvas to white when trash is pressed.
document.querySelector(".trash").addEventListener("click", () => {
    cells.forEach((cell) => cell.style.background = "white");
});

// Track whether mouse is down for click-and-drag.
let mouseDown = false;
document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

// When palette color is clicked, change current color to that color.
document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", (event) => {
    currentColor.style.background = event.target.style.background;
  });
});

cells.forEach((cell) => {
  // Paint current cell the current color if clicked.
  cell.addEventListener("mousedown", (event) => {
    event.target.style.background = currentColor.style.background;
  });

  // Paint current cell the current color if click-and-dragged.
  cell.addEventListener("mouseenter", (event) => {
    if (mouseDown) {
      event.target.style.background = currentColor.style.background;
    }
  });
});
