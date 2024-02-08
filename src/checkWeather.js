import DisplayWeatherInfo from './displayWeatherInfo';

export default (city) => {
    const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=d379543822bd447c8b471126240702&aqi=no&q=';

    const getWeatherData = async (city) => {
        const response = await fetch(`${baseUrl}${city}`);
        const weatherData = await response.json();
        const [temp_c, temp_f, condition] = [weatherData.current.temp_c, weatherData.current.temp_f, weatherData.current.condition.text];

        return [temp_c, temp_f, condition];
    }

    getWeatherData(city).then(
        (weatherInfo) => {
            DisplayWeatherInfo(weatherInfo);
        }
    )
}