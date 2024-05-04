chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.saturation) {
      document.documentElement.style.filter = `saturate(${message.saturation}%)`;
    }
  });
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.brightness) {
      document.documentElement.style.filter = `brightness(${message.brightness}%)`;
    }
  });
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.contrast) {
      document.documentElement.style.filter = `contrast(${message.contrast}%)`;
    }
  });
  