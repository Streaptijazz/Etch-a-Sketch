// Get the grid container element
const gridContainer = document.getElementById("gridContainer");

// Create 16x16 grid divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    // Create a div element for each grid cell
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.textContent = `${i + 1}-${j + 1}`;

    // Append the div to the grid container
    gridContainer.appendChild(div);
    }
}
