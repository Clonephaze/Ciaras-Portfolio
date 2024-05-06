// Function to open the ArtistStatementModal
function openArtistStatementModal() {
    const modal = document.querySelector('.ArtistStatementModal');
    if (modal) {
        modal.style.display = 'grid'; // Change this to 'none' to hide the modal
    }
}

// Function to toggle the visibility of the ArtistStatementModal
function toggleArtistStatementModal() {
    const modal = document.querySelector('.ArtistStatementModal');
    if (modal) {
        if (modal.style.display === 'grid') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'grid';
        }
    }
}

// Attach the openArtistStatementModal function to a button click event
document.querySelector('#sun').addEventListener('click', openArtistStatementModal);

// Close the modal when clicking outside of it
document.querySelector('.ArtistStatementModal').addEventListener('click', (event) => {
    if (event.target === document.querySelector('.ArtistStatementModal')) {
        toggleArtistStatementModal();
    }
});
