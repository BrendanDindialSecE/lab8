// SpaceX API URL for fetching the latest launch data
const apiUrl = "https://api.spacexdata.com/v4/launches/latest";

// Function that gets SpaceX launch data from the API
async function fetchLaunchData() {
    try {
        // Make a request to the SpaceX API and wait for the response
        const response = await fetch(apiUrl);
        
        // Parse the response into JSON format
        const data = await response.json();

        // Call the function to display the fetched data on the webpage
        displayLaunchData(data);
    } catch (error) {
        // If something goes wrong with the fetch request, log the error
        console.error("Error fetching data:", error);
    }
}

// Function to display the SpaceX launch data on the webpage
function displayLaunchData(launch) {
    // Get the container where the launch data will be inserted
    const container = document.getElementById('launch-data');

    // Format the launch data, showing important details like the name, flight number, date, success status, and an image
    const launchDetails = `
        <h2>${launch.name}</h2> <!-- Display the name of the launch -->
        <p><strong>Flight Number:</strong> ${launch.flight_number}</p> <!-- Show the flight number -->
        <p><strong>Date:</strong> ${new Date(launch.date_utc).toLocaleDateString()}</p> <!-- Format and display the launch date -->
        <p><strong>Launch Success:</strong> ${launch.success ? 'Yes' : 'No'}</p> <!-- Indicate if the launch was successful -->
        <p><strong>Details:</strong> ${launch.details || 'No details available'}</p> <!-- Provide additional details, or fallback message if none available -->
        <img src="${launch.links.patch.small}" alt="Launch Patch"> <!-- Display an image of the launch patch if available -->
    `;
    
    // Insert the formatted launch data into the HTML container
    container.innerHTML = launchDetails;
}

// Fetch the SpaceX launch data as soon as the page loads
fetchLaunchData(); // Call the function to start the process