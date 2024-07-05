
const images = [
    "https://www.w3schools.com/w3css/img_lights.jpg",
    "https://www.w3schools.com/w3css/img_fjords.jpg",
    "https://www.w3schools.com/w3css/img_mountains.jpg"
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.getElementById("image");
  const backBtn = document.getElementById("backBtn");
  const forwardBtn = document.getElementById("forwardBtn");
  
  displayImage();
  
  backBtn.addEventListener("click", prevImage);
  forwardBtn.addEventListener("click", nextImage);
  
  function displayImage() {
    imageElement.src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
    updateButtons();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
    updateButtons();
  }
  
  function updateButtons() {
    backBtn.disabled = currentIndex === 0;
    forwardBtn.disabled = currentIndex === images.length - 1;
  }