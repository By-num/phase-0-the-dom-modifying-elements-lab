const main = document.getElementById('main'); // Selects the <main> element
main.remove(); // Removes it from the page

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Bynum is the champion"; // Sets the text inside the <h1>

document.body.appendChild(newHeader); // Adds the <h1> to the page