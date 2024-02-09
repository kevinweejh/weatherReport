import DisplayWeatherInfo from './displayWeatherInfo';

export default (city) => {
    const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=d379543822bd447c8b471126240702&aqi=no&q=';

    const getWeatherData = async (city) => {
        const response = await fetch(`${baseUrl}${city}`);
        const weatherData = await response.json();
        const [location, temp_c, temp_f, cond_text, cond_icon] = [weatherData.location.name, weatherData.current.temp_c, weatherData.current.temp_f, weatherData.current.condition.text, weatherData.current.condition.icon];

        return [location, temp_c, temp_f, cond_text, cond_icon];
    }

    getWeatherData(city).then(
        (weatherInfo) => {
            DisplayWeatherInfo(weatherInfo);
        }
    )
}