document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.photoModal');
    const modalImg = document.getElementById('modalImg');
    const arrowLeft = document.querySelector('.arrowleft');
    const arrowRight = document.querySelector('.arrowright');
    let currentImageIndex = 1; // Initialize the current image index

    function displayModal(imageSrc, index) {
        modalImg.src = imageSrc;
        modal.style.display = 'grid'; // Show the modal
        currentImageIndex = index; // Update the current image index
    }

    function closeModal() {
        modal.style.display = 'none'; // Hide the modal
    }

    function navigateModal(direction) {
        if (direction === 'left') {
            currentImageIndex--;
        } else if (direction === 'right') {
            currentImageIndex++;
        }

        // Loop back to the start or end of the images
        if (currentImageIndex < 1) {
            currentImageIndex = 15; // Assuming there are 15 images
        } else if (currentImageIndex > 15) {
            currentImageIndex = 1;
        }

        // Update the modal's image source
        const newImageSrc = document.getElementById(currentImageIndex.toString()).getAttribute('data-src');
        displayModal(newImageSrc, currentImageIndex);
    }

    // Attach event listeners to all images
    const images = document.querySelectorAll('.PolaroidFrame');
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            const imageSrc = image.getAttribute('data-src');
            displayModal(imageSrc, index + 1); // +1 because IDs start at 1
        });
    });

    // Attach event listeners to the arrow elements
    arrowLeft.addEventListener('click', () => navigateModal('left'));
    arrowRight.addEventListener('click', () => navigateModal('right'));

    // Close the modal when clicking outside of it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
