// The Unsplash URL
const baseLink = "https://source.unsplash.com/1600x900?"

// Get the user-preferred wallpaper type from local-storage on page load
// Otherwise, fallback to minimal
let currentSelection = localStorage.getItem('MNT_THEME_PREFERENCE')
if (!currentSelection) currentSelection = "minimal"

// Set the wallpaper
document.body.style.backgroundImage = `url(${baseLink+currentSelection})`

// Listen for preference change
window.addEventListener("storage", (e) => {
    
    let key = e.key
    let value = e.newValue

    if (key == "MNT_THEME_PREFERENCE") document.body.style.backgroundImage = `url(${baseLink+value})`
})
