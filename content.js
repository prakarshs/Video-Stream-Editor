chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.saturation) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.style.filter = `saturate(${message.saturation}%)`;
        });
    }
  });
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.brightness) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.style.filter = `brightness(${message.brightness}%)`;
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.contrast) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.style.filter = `contrast(${message.contrast}%)`;
        });
    }
});