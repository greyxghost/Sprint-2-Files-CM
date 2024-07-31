// Step 3: Read the file using the Fetch API available in JavaScript
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            processData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Step 4: Using a forEach loop iterate over all the records available from the JSON file and display 
// one of the key-value pairs of data to test that your reading of the JSON file is working.
function processData(data) {
    data.forEach(record => {
        console.log(`Artist: ${record.albumArtist}, Album Name: ${record.albumName}, Year Released: ${record.yearReleased}, Number in Stock: ${record.numberInStock}, Purchase Price: ${record.purchasePrice}, Sell Price: ${record.sellPrice} `);
    });

    // Sort data alphabetically by artist name
    data.sort((a, b) => a.albumArtist.localeCompare(b.albumArtist));

    displayData(data);

    // Generate and log summaries (No rounding to keep raw data)
    console.log(generateSummary(data));
    console.log(generateStockSummary(data));
    console.log(generateTotalPurchasePrice(data));
    console.log(generateTotalSellPrice(data));
}

// Step 5: Functions to return strings of data describing the contents of the JSON file
function generateSummary(data) {
    return data.length;
}

function generateStockSummary(data) {
    const totalStock = data.reduce((sum, record) => sum + record.numberInStock, 0);
    return totalStock;
}

function generateTotalPurchasePrice(data) {
    return data.reduce((sum, record) => sum + record.purchasePrice, 0);
}

function generateTotalSellPrice(data) {
    return data.reduce((sum, record) => sum + record.sellPrice, 0);
}

// Write the results of reading the JSON file to the browser window as HTML. The JSON data should also be written to the browser console
function displayData(data) {
    const container = document.createElement('div');
    const totalPurchasePrice = generateTotalPurchasePrice(data).toFixed(2);
    const totalSellPrice = generateTotalSellPrice(data).toFixed(2);
    container.innerHTML = `
        <h2>Album Inventory</h2>

        <center>
            <div class="summarybox">
                <div class="summaryboxtitle"><h3>Summary</h3></div>
                <p>There are a total of <strong>${generateSummary(data)}</strong> different albums in stock.</p>
                <p>Total number of albums in stock: <strong>${generateStockSummary(data)}</strong></p>
                <p>Total purchase price: <strong>$ ${totalPurchasePrice}</strong></p>
                <p>Total sell price: <strong>$ ${totalSellPrice}</strong></p>
            </div>
        </center>

        <h2>Album Information</h2>
        <table>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Album Name</th>
                    <th>Year Released</th>
                    <th>Number in Stock</th>
                    <th>Purchase Price</th>
                    <th>Sell Price</th>
                </tr>
            </thead>
            <tbody>
                ${data.map(record => `
                    <tr>
                        <td>${record.albumArtist}</td>
                        <td>${record.albumName}</td>
                        <td>${record.yearReleased}</td>
                        <td>${record.numberInStock}</td>
                        <td>${record.purchasePrice}</td>
                        <td>${record.sellPrice}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.body.appendChild(container);
}

