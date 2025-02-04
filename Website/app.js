require('dotenv').config();
const apiKey = process.env.OPENWEATHERMAP_API_KEY;


// Function to fetch weather data from OpenWeatherMap API
const fetchWeather = async (zipCode) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    const response = await fetch(baseURL);
    try {
        const data = await response.json();
        if (data.cod !== 200) { // Check for valid response
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert(`Error fetching weather data: ${error.message}`);
    }
};

// Function to POST data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

// Function to update the UI dynamically
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const data = await request.json();
        document.getElementById('date').innerHTML = `Date: ${data.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(data.temp)} °F`;
        document.getElementById('content').innerHTML = `Feeling: ${data.feelings}`;
    } catch (error) {
        console.error("Error updating UI:", error);
    }
};

// Event listener for the "Generate" button
document.getElementById('generate').addEventListener('click', async () => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    if (!zipCode) { // Check for valid ZIP code input
        alert("Please enter a valid ZIP code.");
        return;
    }

    const weatherData = await fetchWeather(zipCode);

    if (weatherData && weatherData.main) { // Proceed only if valid weather data is returned
        const data = {
            date: new Date().toLocaleDateString(),
            temp: weatherData.main.temp,
            feelings: feelings,
        };

        await postData('/add', data); // Send data to the server
        updateUI(); // Update the UI with the new data
    } else {
        alert("Could not fetch weather data. Please check the ZIP code or try again later.");
    }
});