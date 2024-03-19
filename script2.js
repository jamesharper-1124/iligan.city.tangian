const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let imageIndex = 0; // Keeps track of the current image index

const images = [
  "image/1.png", // Path to first image
  "image/2.jpg", // Path to second image
  "image/3.jpg", // Path to third image
  "image/4.jpg", // Path to fourth image
  "image/5.jpg", // Path to fifth image
  "image/6.jpg", // Path to sixth image
];

nextButton.addEventListener('click', () => {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0; // Reset to first image when reaching the end
  }
  currentImage.src = images[imageIndex];
});

prevButton.addEventListener('click', () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1; // Reset to last image
  }
  currentImage.src = images[imageIndex];
});