const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.classList.add("background");
bgImage.src = `images/${chosenImage}`
document.body.appendChild(bgImage);