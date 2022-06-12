// Required elements
const themeSelector = document.getElementById("theme-selector")
const selectButton = document.getElementById("select-button")

// Function that saves the user's wallpaper preference on local-storage
function savePreference() {
    let value = themeSelector.value
    localStorage.setItem('MNT_THEME_PREFERENCE', value)
}

// On load, set the select box value to the previous selection
let previousSelection = localStorage.getItem('MNT_THEME_PREFERENCE')
if (previousSelection) themeSelector.value = previousSelection

// Event listener that checks for the button click
selectButton.addEventListener("click", savePreference)
