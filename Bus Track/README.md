# Bus Tracking Exercise

An interactive web application that tracks the location of buses in real-time using the MBTA API and displays them on a Google Map.

## Overview

This project utilizes the MBTA API to fetch real-time bus locations and displays them on a map using Google Maps API. The buses are represented by markers on the map, and their direction is indicated by arrow icons.

## Project Structure

### HTML File

- `index.html`: Main HTML file containing the map container and script references.

### JavaScript Files

- `bus_script.js`: JavaScript code for interacting with the MBTA API, updating bus locations, and handling map functionality.

### CSS File

- `styles4.css`: CSS styles for styling the map container.

## Prerequisites

Before running the project, make sure to obtain the following:

1. **MBTA API Key**: Generate an API key from the [MBTA API Developer Portal](https://www.mbta.com/developers/v3-api). Replace `your_mbta_api_key` in the `bus_script.js` file with your actual API key.

2. **Google Maps API Key**: Create an API key for the Google Maps JavaScript API from the [Google Cloud Console](https://console.cloud.google.com/). Replace `your_google_maps_api_key` in the `index.html` file with your actual API key.

## Usage

1. Open `index.html` in a web browser.
2. The map will display with real-time bus locations.
3. Buses are represented by markers, and their direction is indicated by arrow icons.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/bus-tracking-exercise.git`
2. Replace `your_mbta_api_key` in `bus_script.js` with your MBTA API key.
3. Replace `your_google_maps_api_key` in `index.html` with your Google Maps API key.
4. Open `index.html` in your preferred web browser.

## Contributing

Feel free to contribute by enhancing the bus tracking features or adding new functionalities. Create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Felipe Mrich - [GitHub](https://github.com/felipemrich)

---

Feel free to customize this template based on your specific details and requirements. Ensure to replace placeholder API keys with your actual keys. If you haven't already, create a `LICENSE` file in your repository with the MIT License text.
