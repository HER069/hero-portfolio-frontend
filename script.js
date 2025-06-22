// Typing effect
const text = "Business student. Multilingual communicator. Team player.";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      i = 0;
      type();
    }, 3000);
  }
}
type();

// Scroll reveal
function reveal() {
  document.querySelectorAll('.section').forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
