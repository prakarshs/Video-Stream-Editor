const saturationRange = document.getElementById('saturationRange');

saturationRange.addEventListener('input', (event) => {
  const saturationValue = event.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { saturation: saturationValue });
  });
});

const brightnessRange = document.getElementById('brightnessRange');

brightnessRange.addEventListener('input', (event) => {
  const brightnessValue = event.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { brightness: brightnessValue });
  });
});

const contrastRange = document.getElementById('contrastRange');

contrastRange.addEventListener('input', (event) => {
  const contrastValue = event.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { contrast: contrastValue });
  });
});

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


