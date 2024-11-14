var i = 0;
var txt = 'I am a passionate frontend developer with a keen eye for detail and a strong desire to create beautiful, functional websites. '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i >= txt.length) {
    i = 0; 
    document.getElementById("one").innerHTML = ""; 
  }

  document.getElementById("one").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}

var txt = "Hello,i'm John a passionate frontend developer with a keen eye for detail and a strong desire to create beautiful, functional web.";
var speed = 100; 
var i = 0;

typeWriter();








