chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'closePopup') {
    chrome.extension.getViews({ type: 'popup' }).forEach(function (popup) {
      popup.close()
    })
  }
})
