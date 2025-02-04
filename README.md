# Weather Journal App

This is a simple web application that allows users to enter a ZIP code and their feelings, fetches the weather information for that location, and displays it along with their feelings. The app dynamically updates the UI by using the OpenWeatherMap API and an Express.js server.

## Features
- User can input a ZIP code and their feelings.
- Fetches real-time weather data using the OpenWeatherMap API.
- Saves the data on the server.
- Displays weather data and user feelings on the UI dynamically.
- Built using HTML, CSS, JavaScript, and Node.js (Express).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/SanaMahmoodd/Weather-Journal-App.git
cd Weather-Journal-App

### 2. Install dependencies 
```bash
npm install

### 3. Set up your API key
Create a .env file in the root of the project and add your OpenWeatherMap API key:

```bash
API_KEY=your-api-key-here

You can get your free API key from OpenWeatherMap.

### 4. Run the server
```bash
npm start

- The server will run at http://localhost:4000.

### 5. Open the app in your browser
Go to http://localhost:4000 to use the Weather Journal app.

## Files

- index.html: The main HTML file for the user interface.
- app.js: The JavaScript file that contains the logic to fetch weather data, post data to the server, and update the UI.
- server.js: The Express server that handles API requests (GET and POST) and serves the static files.

## How It Works
- Frontend (app.js):
User inputs a ZIP code and their feelings.
The app fetches the weather data using the OpenWeatherMap API.
The data (weather and feelings) is sent to the server.
The server stores the data and returns it to update the UI.

- Backend (server.js):
Uses Express.js to handle GET and POST requests.
Stores the user data in the projectData object.
Sends the stored data back when the user requests it.

## Technologies Used

- HTML/CSS: For the structure and styling of the app.
- JavaScript: For handling the logic and interacting with the OpenWeatherMap API.
- Node.js (Express): Backend server to handle API requests and store data.
- OpenWeatherMap API: Provides real-time weather data based on ZIP code.

## Contributing
Feel free to fork this repository, create a new branch, and submit a pull request with any improvements or bug fixes!