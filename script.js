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
  document.querySelectorAll('.reveal').forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Contact form submission via fetch API
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch('https://hero-contact-backend.vercel.app/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message || 'Message sent!');
    form.reset();

  } catch (error) {
    alert('Failed to send message. Please try again later.');
  }
});
