let saturationValue = 100;
let brightnessValue = 100;
let contrastValue = 100;
let sepiaValue = 0;

// Function to update video filters
function updateFilters() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.filter = `saturate(${saturationValue}%) brightness(${brightnessValue}%) contrast(${contrastValue}%) sepia(${sepiaValue}%)`; 
    });
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.saturation !== undefined) {
        saturationValue = message.saturation;
    }
    if (message.brightness !== undefined) {
        brightnessValue = message.brightness;
    }
    if (message.contrast !== undefined) {
        contrastValue = message.contrast;
    }
    if (message.sepia !== undefined) {
        sepiaValue = message.sepia;
    }
    updateFilters(); // Update filters when values change
});

// Reset button click event listener
document.getElementById('reset').addEventListener('click', () => {
    // Reset slider values to default
    saturationValue = 100;
    brightnessValue = 100;
    contrastValue = 100;
    sepiaValue = 0;
    updateFilters(); // Update filters with default values
});
