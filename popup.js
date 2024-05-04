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

