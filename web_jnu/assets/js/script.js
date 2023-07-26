const textElement = document.querySelector('.animated-text');
const text = textElement.innerHTML;
textElement.innerHTML = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();
