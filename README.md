# weatherReport

Welcome to `weatherReport`, a dynamic web application that offers real-time weather updates. This project represents a journey into the world of web development, focusing on the integration of external APIs, specifically the Weather API. The application operates through an easy-to-use interface, allowing users to input their location details and receive up-to-date weather information. 

Experience the live version here: [weatherReport](https://kevinweejh.github.io/weatherReport/).

## Project Overview

### Purpose

The core objective of `weatherReport` is to explore the practical use of external APIs in web development. This project demonstrates the process of fetching, processing, and displaying data from a Weather API. It's an exercise in asynchronous JavaScript requests and dynamic UI updates based on user input.

### Key Features

- Interactive modal dialog for user input (country and city).
- Asynchronous data fetching from the Weather API using the `checkWeather.js` module.
- Dynamic display of weather conditions, including temperature in Celsius or Fahrenheit.
- Option for users to restart and search for new locations.

## Technical Details

### Weather API Integration

- The `checkWeather.js` module sends asynchronous requests to the Weather API.
- After receiving the response, necessary data (such as temperature, weather conditions) are extracted.
- The application handles both success and error responses gracefully, ensuring a smooth user experience.

### User Interface

- The initial modal dialog prompts users to enter their country and city.
- The `displayWeatherInfo` function triggers a new modal dialog to present the weather data.
- Users can toggle between Celsius and Fahrenheit for temperature display.
- A clear option to restart the process for a new location search.

## Setup and Installation

### Prerequisites

Node.js v21.1.0

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

## Usage and Examples

Upon accessing the weatherReport application, you'll be greeted with a modal asking for your country and city. Once submitted, the weather data is fetched and displayed in another modal dialog. Here, you can see the weather conditions and temperature. You can also switch between Celsius and Fahrenheit. After viewing the weather information, you have the option to start over and search for a different location.

## Contribution and Support

### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, try out different configurations, share your findings, and submit your changes through a pull request.. 

### Support
If you have any questions or need assistance with the setup and configuration, please reach out at [hello@codebykevin.dev](mailto:hello@codebykevin.dev).

## Acknowledgements and References
Special thanks to the various resources and documentation that made this project possible, including the [Weather API Documentation](https://www.weatherapi.com/docs/).
