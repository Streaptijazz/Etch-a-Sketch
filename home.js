// Get the grid container element
const gridContainer = document.getElementById("gridContainer");

// Create 16x16 grid divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    // Create a div element for each grid cell
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.id.add
    //div.textContent = `${i + 1}-${j + 1}`;
    div.textContent = `${i + 1}-${j + 1}`;
    
    // Generate a unique ID for each div
    const divId = `div-${i}-${j}`;
    div.setAttribute("id", divId);
    


// Add event listeners for mouseenter and mouseleave
div.addEventListener("mouseenter", function() {
    this.classList.add("hover-effect");
    });

    div.addEventListener("mouseleave", function() {
    this.classList.remove("hover-effect");
    });
    
// Append the div to the grid container
gridContainer.appendChild(div);
}
}

