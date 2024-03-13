document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();

        // Simulate user search results (replace this with your actual search logic)
        const users = simulateUserSearch(searchTerm);

        // Display search results
        displaySearchResults(users);
    });

    function simulateUserSearch(term) {
        // Simulated user data - replace with your actual user data or API call
        const allUsers = [
            { id: 1, name: 'User1' },
            { id: 2, name: 'User2' },
            { id: 3, name: 'User3' },
            // Add more users as needed
        ];

        // Filter users based on the search term
        return allUsers.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));
    }

    function displaySearchResults(users) {
        // Clear previous search results
        searchResults.innerHTML = '';

        // Display each user in the results
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = user.name;
            searchResults.appendChild(userDiv);
        });
    }

    // Get elements
const addVideoButton = document.getElementById('add-video');
const videoInput = document.getElementById('video-input');
const videoSection = document.querySelector('.video-section');

// Add event listener to "Add Video" button
addVideoButton.addEventListener('click', () => {
    videoInput.click();
});

// Add event listener to video input
videoInput.addEventListener('change', () => {
    if (videoInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        displayVideo(videoFile);
    }
});

// Function to display selected video on the page
function displayVideo(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const videoDataUrl = event.target.result;

        // Create video element
        const videoElement = document.createElement('video');
        videoElement.src = videoDataUrl;
        videoElement.controls = true;
        videoElement.width = 500;
        videoElement.height = 300;

        // Display video on the page
        videoSection.innerHTML = ''; // Clear existing content
        videoSection.appendChild(videoElement);
    };

    reader.readAsDataURL(file);
}

    
});
