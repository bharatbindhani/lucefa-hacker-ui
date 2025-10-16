// 👋 Welcome Back Voice + Animation
window.addEventListener("load", () => {
  // Text Animation
  const welcome = document.createElement("div");
  welcome.textContent = "Welcome back, Sir";
  welcome.style.position = "absolute";
  welcome.style.top = "20%";
  welcome.style.left = "50%";
  welcome.style.transform = "translateX(-50%)";
  welcome.style.fontSize = "28px";
  welcome.style.fontWeight = "600";
  welcome.style.color = "#00ff00";
  welcome.style.opacity = "0";
  welcome.style.transition = "opacity 1s ease, transform 1s ease";
  welcome.style.zIndex = "2";
  document.body.appendChild(welcome);

  setTimeout(() => {
    welcome.style.opacity = "1";
    welcome.style.transform = "translateX(-50%) translateY(10px)";
  }, 500);

  setTimeout(() => {
    welcome.style.opacity = "0";
  }, 4000);

  // Voice Greeting 🎤
  if ("speechSynthesis" in window) {
    const msg = new SpeechSynthesisUtterance("Welcome back, Sir");
    msg.pitch = 1.2;
    msg.rate = 1;
    msg.volume = 1;
    msg.lang = "en-IN";
    speechSynthesis.speak(msg);
  }
});
