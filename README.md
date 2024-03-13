
# Weather App

<p align="center">
    <img src="https://img.shields.io/badge/npm-CB3837?logo=npm"
         alt="npm">
    <img src="https://img.shields.io/badge/Handlebars.js-v4.7.7-FCAA33"
      alt="Handlebars.js">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white"
      alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white"
      alt="CSS3">
    <img src="https://img.shields.io/badge/Axios-5.1.1-007ACC?logo=axios&logoColor=white"
      alt="Axios">
</p>

## Overview

This is a simple weather application that provides weather information based on user-provided location. It utilizes two APIs: [Weatherstack](http://api.weatherstack.com) for fetching weather data and [Mapbox](https://api.mapbox.com/geocoding/v5/mapbox.places) for geocoding user input.

[Live Demo](https://weather-bvqj.onrender.com/)


## Features

- **Location Search:** Users can search for weather information by entering a location name or coordinates.
- **Responsive Design:** The application is designed to be responsive, providing a consistent experience across different devices.

## Technologies Used

- **Frontend:** Handlebars.js, HTML, CSS
- **APIs:** Weatherstack, Mapbox
- **JavaScript Libraries:** Axios (for API requests), Bootstrap (for styling)

## Installation
1. Clone the repository:
```
git clone https://github.com/KhaledGharib/Weather-web-app.git
```
2. Navigate to the project directory: 
`cd weather-app`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your API keys:
    ```
    WEATHERSTACK_API_KEY=your_weatherstack_api_key
    MAPBOX_API_KEY=your_mapbox_api_key
    ```
5. Start the development server: `npm start`

## Usage

1. Open the application in your web browser.
2. Enter a location in the search bar and press Enter or click the search button.
3. View the current weather information displayed on the screen.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

