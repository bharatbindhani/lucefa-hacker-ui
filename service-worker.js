function loadName() {
  const savedName = localStorage.getItem("customName") || "Lucefa";

  // Logo render letter by letter
  const logo = document.getElementById("logo");
  logo.innerHTML = "";
  [...savedName].forEach((ch, i) => {
    const span = document.createElement("span");
    span.textContent = ch;
    span.style.animationDelay = (i * 0.2) + "s";

    // Pure neon green glow effect
    span.style.color = "#00ff00";
    span.style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff66, 0 0 20px #00ffaa";

    logo.appendChild(span);
  });

  document.getElementById("footer").innerText = "Made for " + savedName + " • by Badal_6174";
}
[...savedName].forEach((ch, i) => {
  const span = document.createElement("span");
  span.textContent = ch;
  span.style.animationDelay = (i * 0.2) + "s";

  // Neon green glow effect only
  span.style.color = "#00ff00";
  span.style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff33, 0 0 20px #00ff66";

  logo.appendChild(span);
});
