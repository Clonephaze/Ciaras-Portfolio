// Select the modal and its content container
const modal = document.querySelector('.photoModal');
const modalContent = modal.querySelector('.photoModalContent');

// Function to display the modal with the selected image
function displayModal(imageSrc) {
    // Update the modal content with the new image
    modalContent.querySelector('img').src = imageSrc;
    // Display the modal
    modal.style.display = 'grid'; // Assuming you want to use 'grid' for display, adjust as needed
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event listeners to each frame
for (let i = 1; i <= 15; i++) {
    const frame = document.getElementById(i.toString());
    frame.addEventListener('click', () => {
        // Assuming each frame has an associated image URL stored in a data attribute
        // For example, data-src="path/to/image.jpg"
        const imageSrc = frame.getAttribute('data-src');
        displayModal(imageSrc);
    });
}

// Close the modal when clicking outside of it
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});