const colorSelector = document.getElementById("color");
const blurSelector = document.getElementById("blur");
const paddingSelector = document.getElementById("padding");
const root = document.querySelector(":root");

blurSelector.addEventListener("input", () => {
  root.style.setProperty("--blur", `${blurSelector.value}px`);
});

paddingSelector.addEventListener("input", () => {
  root.style.setProperty("--padding", `${paddingSelector.value}px`);
});

colorSelector.addEventListener("input", () => {
  root.style.setProperty("--base-clr", colorSelector.value);
});
