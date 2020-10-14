
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Speedcubers", "Creators", "Record Breakers", "Innovators"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var videoEl = document.querySelector('video');
document.querySelector('.video-button').addEventListener('click', 
                                                            function(){
  if(this.dataset.aperture === 'open') {
    this.dataset.aperture = 'closed';
    videoEl.pause();
    videoEl.progress = 0;
  } else {
    this.dataset.aperture = 'open';
    videoEl.play();
  }
});

const map = document.querySelector('#contact')

// simulates arriving at #Who-We-Are for the purpose of this example
    
        addEventListener('DOMContentLoaded', event => {
        if (window.location.hash === 'contact') {
            map.scrollIntoView({behavior: "smooth", block: "start"});
        }
        });