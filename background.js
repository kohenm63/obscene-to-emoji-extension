chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "substituteObsceneWords") {
        // Send a message to the content script to substitute obscene words
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "replaceObsceneWords"
            }, function (response) {
                if (response && response.status === "success") {
                    console.log("Obscene words replaced successfully");
                } else {
                    console.log("Failed to replace obscene words");
                }
            });
        });
    }
});
