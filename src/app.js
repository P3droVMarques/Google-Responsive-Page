const textElement = document.getElementById('typing-text');
const text = 'Welcome to my Google Page! ❤';

let index = 0;

function typeText() {
  textElement.textContent += text[index];
  index++;

  if (index >= text.length) {
    clearInterval(interval);
  }
}

//100ms 
const typingSpeed = 100;


const interval = setInterval(typeText, typingSpeed);
