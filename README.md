# ecs522u
ECS522U: Graphical User Interfaces (2024) at Queen Mary University of London
Group 6 submission, received top marks.

## Project Overview
This project is a weather application that fetches weather data from multiple APIs including OpenWeatherMap, OpenMeteo, and Weatherbit. The application is built using JavaScript and React.
This weather app is specifically designed for sailors and individuals living near the coast. 
Hence, the application will only provide information about coastal cities and towns.
If you enter a location that is not near the coast, the application will display an error message. (This is a feature, not a bug.)
E.g. Try entering "Calais" for a valid example or "London" for an invalid example.

## Prerequisites
- Node.js
- npm

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Rahat464/ecs522u.git
    cd ecs522u
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Fill `index.js` with your API keys.

4. Start the application:
    ```sh
    npm start
    ```

## Usage
- Enter a location in the input field to fetch weather data.
- The application will display weather forecasts, marine weather data, and weather alerts.

## API Keys
You need to source your own API keys from the following services. The free tier should be sufficient for this project.
- [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
- [Weatherbit](https://www.weatherbit.io/account/create)

## License
This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) license.
You can view the license [here](https://creativecommons.org/licenses/by-nc-nd/4.0/).

**Academic Use Restriction**: 
You may not use the code in this repository for academic purposes, including but not limited to assignments, projects, or any other coursework. 
Doing so would be considered academic misconduct.
