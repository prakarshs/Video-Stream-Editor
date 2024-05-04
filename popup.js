// Retrieve slider values from localStorage if available, otherwise use default values
let brightnessValue = localStorage.getItem('brightnessValue') || 100;
let contrastValue = localStorage.getItem('contrastValue') || 100;
let saturationValue = localStorage.getItem('saturationValue') || 100;
let sepiaValue = localStorage.getItem('sepiaValue') || 0;

// Update the slider elements with the retrieved values
document.getElementById('brightnessRange').value = brightnessValue;
document.getElementById('contrastRange').value = contrastValue;
document.getElementById('saturationRange').value = saturationValue;
document.getElementById('sepiaRange').value = sepiaValue;

// Add event listeners to the sliders to update localStorage and send messages
document.getElementById('brightnessRange').addEventListener('input', updateBrightness);
document.getElementById('contrastRange').addEventListener('input', updateContrast);
document.getElementById('saturationRange').addEventListener('input', updateSaturation);
document.getElementById('sepiaRange').addEventListener('input', updateSepia);

// Function to update brightness value
function updateBrightness(event) {
    brightnessValue = event.target.value;
    localStorage.setItem('brightnessValue', brightnessValue);
    sendMessage({ brightness: brightnessValue });
}

// Function to update contrast value
function updateContrast(event) {
    contrastValue = event.target.value;
    localStorage.setItem('contrastValue', contrastValue);
    sendMessage({ contrast: contrastValue });
}

// Function to update saturation value
function updateSaturation(event) {
    saturationValue = event.target.value;
    localStorage.setItem('saturationValue', saturationValue);
    sendMessage({ saturation: saturationValue });
}

// Function to update sepia value
function updateSepia(event) {
    sepiaValue = event.target.value;
    localStorage.setItem('sepiaValue', sepiaValue);
    sendMessage({ sepia: sepiaValue });
}

// Function to send message to content script with updated values
function sendMessage(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}

// Select all spans and inputs
const slideValues = document.querySelectorAll("span");
const inputSliders = document.querySelectorAll("input");

// Iterate over each input slider
inputSliders.forEach((inputSlider, index) => {
    // Add event listener for input event
    inputSlider.addEventListener("input", () => {
        let value = inputSlider.value;
        // Update the corresponding slideValue span
        slideValues[index].textContent = value;
        slideValues[index].style.left = (value / 2) + "%";
        slideValues[index].classList.add("show");
    });

    // Add event listener for blur event
    inputSlider.addEventListener("blur", () => {
        // Hide the corresponding slideValue span
        slideValues[index].classList.remove("show");
    });
});


