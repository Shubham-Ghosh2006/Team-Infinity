let currentIndex = 0;
const images = [
    './Images/Europa 2.jpg',
    './Images/Ecological Balance.jpg',
    './Images/Hydrothermal vents 3.webp.jpg',
    './Images/Ocean World.jpg',
    './Images/Underworld.jpg'
];

const mainImage = document.getElementById('main-image');

// Function to update the large preview image
function updateMainImage() {
    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = images[currentIndex];
        mainImage.style.opacity = 1;
    }, 300); // Smooth transition effect
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
}

// Function to select a specific image via thumbnail
function selectImage(index) {
    currentIndex = index;
    updateMainImage();
}

// Automatic sliding
setInterval(nextImage, 5000); // Change image every 5 seconds

// Add keyboard navigation for arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});
