// Get all the images in the gallery
const images = document.querySelectorAll('.images');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', function () {
    // Check if the clicked image is already enlarged
    const isEnlarged = this.classList.contains('enlarged');

    // Remove 'enlarged' class from all images
    images.forEach(img => img.classList.remove('enlarged'));

    // Toggle 'enlarged' class only if the clicked image was not enlarged
    if (!isEnlarged) {
      this.classList.toggle('enlarged');
    }
  });
});
