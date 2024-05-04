let saturationValue = 100;
let brightnessValue = 100;
let contrastValue = 100;
let sepiaValue = 0;

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

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.filter = `saturate(${saturationValue}%) brightness(${brightnessValue}%) contrast(${contrastValue}%) sepia(${sepiaValue}%)`; 
    });
});
