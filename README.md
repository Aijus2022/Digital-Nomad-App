# Digital Nomads App README
# DN-MVP
MVP for digital nomad group project
https://mitchjsutherland.github.io/DN-MVP/

## Overview

The Digital Nomads App is a web application created using JavaScript, HTML, CSS, and the Fetch API. This app assists users in searching for remote jobs with a focus on various countries. It utilizes different data sources, including Google Maps for location information.

## Technologies Used

- **JavaScript (JS):** The core programming language for implementing logic and functionality.
- **HTML:** Used for structuring the web page.
- **CSS:** Responsible for styling and layout.
- **JSON:** Used for storing and exchanging data between the server and the web application.
- **DOM Manipulation:** Techniques applied to dynamically update and modify the content of the web page.

## Features

### Remote Job Search

- Users can search for remote jobs with the limitation that the country list is based on the available jobs from the API provider.

### Country Information

- The app provides information about the selected country, including its flag and location on Google Maps.

### Latest News

- Users can access the latest news about the selected country.

## Implementation Details

### Country Search

- The country search box is populated with a predefined list of countries based on the jobs API provider's data.

### Event Listener

- An event listener is implemented to capture the selected country name from the JSON file in the DOM.
- The selected country name is then converted into a string and used to fetch additional information about the country from various API endpoints.

### Google Maps Integration

- Google Maps is integrated to provide visual representation and location details of the selected country.

### News API Integration

- The app fetches the latest news about the selected country from relevant API endpoints.

## Usage

1. Open the `index.html` file in your web browser.
2. Use the country search box to select a country.
3. Explore remote job opportunities and access additional information such as the country's flag, location on Google Maps, and the latest news.

## Note

- The country list in the search box is limited to the available countries from the jobs API provider.

Feel free to explore, contribute, and make the Digital Nomads App an even more powerful tool for remote job seekers!

