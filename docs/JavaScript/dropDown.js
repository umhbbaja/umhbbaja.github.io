// Close the dropdown menu when clicking outside of it
document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Add an event listener to the "Sponsorship" tab
    dropdown.addEventListener("mouseover", function() {
        dropdownMenu.style.display = "block";
        
        // Get the width of the tab
        const tabWidth = dropdown.getBoundingClientRect().width;
        // Set the dropdown menu's width to match the tab's width
        dropdownMenu.style.width = tabWidth + "px";
    });

    // Add an event listener to hide the dropdown when not hovering over it
    dropdown.addEventListener("mouseout", function() {
        dropdownMenu.style.width = "0"; // You can set a specific width here if needed
    });
});

