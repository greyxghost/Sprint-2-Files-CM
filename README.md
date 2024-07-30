# Sprint #2 JavaScript - Album Inventory

This project is a part of the Software Development Sprint. It involves creating a web application that reads data from a JSON file, processes it, and displays it on a webpage. The application also provides summaries and statistics based on the data.

## Project Structure

- **index.html**: The main HTML file that structures the webpage.
- **styles.css**: The CSS file that styles the HTML elements.
- **script.js**: The JavaScript file that fetches, processes, and displays the data.
- **data.json**: The JSON file containing the album inventory data.

## Features

1. **Fetch Data**: The application uses the Fetch API to read data from a JSON file.
2. **Display Data**: It displays the album inventory data in a table format on the webpage.
3. **Data Processing**: The application processes the data to generate summaries such as:
   - Total number of different albums in stock.
   - Total number of albums in stock.
   - Total purchase price.
   - Total sell price.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/sprint2-js-album-inventory.git

# Project Overview

## Open the Project:

1. Open `index.html` in your preferred web browser.

## View the Output:

- The application will fetch and display the album inventory data from `data.json`.
- It will display a summary of the inventory.
- Detailed information about each album will be presented in a table.

## File Details

### index.html
This file structures the webpage and includes references to the CSS and JavaScript files. It sets up the basic HTML structure and links to the external JavaScript and CSS files.

### styles.css
This file contains the styles for the webpage, including:

- Table styling to ensure the table takes up the full width of its container, with padding and borders for table cells.
- Center alignment for headings and paragraphs.
- Styling for the title box and summary box, including borders, background colors, and rounded corners.

### script.js
This file contains the JavaScript code that:

- Uses the Fetch API to read data from `data.json`.
- Processes the data to sort it alphabetically by artist name.
- Generates summaries, such as the total number of different albums, total stock, total purchase price, and total sell price.
- Displays the data in a table on the webpage, along with the generated summaries.

### data.json
This file contains the album inventory data in JSON format. Each record includes:

- `entryId`: A unique identifier for each entry.
- `albumName`: The name of the album.
- `albumArtist`: The artist of the album.
- `yearReleased`: The year the album was released.
- `numberInStock`: The number of albums in stock.
- `purchasePrice`: The purchase price of the album.
- `sellPrice`: The selling price of the album.

## Summary

This project demonstrates the use of JavaScript to read and process JSON data, manipulate the DOM to display data on a webpage, and apply CSS for styling. It provides a practical example of how to build a simple web application that interacts with data and presents it in a user-friendly format.
