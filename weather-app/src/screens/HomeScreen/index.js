export const fetchData = async (userInput) => {
    // Constants
    const API_KEY = ''; // Add your own API key here
    const WEATHER_API_URL = ('https://api.openweathermap.org/data/2.5/forecast?lat={1}&lon={2}&appid='+API_KEY);
    const GEOCODING_API_URL = ('https://api.openweathermap.org/geo/1.0/direct?q={1}&limit=1&appid='+API_KEY);

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
            return;
        }

        // Get 5-day (forecast5) weather forecast
        // Documentation: https://openweathermap.org/forecast5#fields_JSON
        const weatherUrl = (WEATHER_API_URL
            .replace('{1}', lat)
            .replace('{2}', lon)
        );
        const forecast5Response = await fetch(weatherUrl);

        // Return the forecast data to the HomeScreen component to be displayed
        return await forecast5Response.json();

    } catch (error) {alert(error)}
};

export { HomeScreen } from "./HomeScreen";
