export const fetchData = async (userInput) => {
    // Constants
    const API_KEY = {
        "openweathermap": "74ee18ca0b3d0db25a9331a5899b0a85",
        "weatherbit": "af697910398e456a84fa8a5943ba6a7f"
    }
    const WEATHER_API_URL = ('https://api.openweathermap.org/data/2.5/forecast?lat={1}&lon={2}&appid=' +
        API_KEY["openweathermap"]);
    const GEOCODING_API_URL = ('https://api.openweathermap.org/geo/1.0/direct?q={1}&limit=1&appid=' +
        API_KEY["openweathermap"]);
    const OPENMETEO_API_URL = "https://marine-api.open-meteo.com/v1/marine?" +
        "latitude={1}&longitude={2}&daily=wave_height_max,wind_wave_direction_dominant"
    const WEATHERBIT_API_URL = ('https://api.weatherbit.io/v2.0/alerts?lat={1}&lon={2}&key=' +
        API_KEY["weatherbit"]);

    // Wrap in try-catch block to handle errors
    try{
        // Validate user input
        if (!userInput){
            alert("Please enter a location.");
            return;
        }

        // Convert string location to coordinates using Geocoding API
        // Documentation: https://openweathermap.org/api/geocoding-api#direct_name_fields
        const locationUrl = (GEOCODING_API_URL.replace('{1}', userInput));
        const locationResponse = await fetch(locationUrl);
        const locationData = (await locationResponse.json())[0];

        let lat = locationData.lat;
        let lon = locationData.lon;

        if (!locationData || !lat || !lon) {
            alert('Location data is missing latitude or longitude.');
            // return;
        }

        // Get 5-day (forecast5) weather forecast
        // Documentation: https://openweathermap.org/forecast5#fields_JSON
        const weatherUrl = (WEATHER_API_URL
            .replace('{1}', lat)
            .replace('{2}', lon)
        );
        const forecast5Response = await fetch(weatherUrl);
        const forecast5Data = await forecast5Response.json();

        // Get marine weather data from OpenMeteo API
        // Documentation: https://open-meteo.com/en/docs/marine-weather-api
        const openMeteoUrl = (OPENMETEO_API_URL
            .replace('{1}', lat)
            .replace('{2}', lon)
        );

        const openMeteoResponse = await fetch(openMeteoUrl);
        const openMeteoData = await openMeteoResponse.json();

        if (openMeteoData.error) alert(openMeteoData.reason)

        // Get weather alerts from Weatherbit API
        // Documentation: https://www.weatherbit.io/api/alerts
        const weatherbitUrl = (WEATHERBIT_API_URL
            .replace('{1}', lat)
            .replace('{2}', lon)
        );
        const weatherbitResponse = await fetch(weatherbitUrl);
        const weatherbitData = await weatherbitResponse.json();

        console.log(forecast5Data);

        // Return the forecast data to the HomeScreen component to be displayed
        return {forecast5Data, openMeteoData, weatherbitData};

    } catch (error) {alert(error)}
};

export { HomeScreen } from "./HomeScreen";