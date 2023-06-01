document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    var button = document.getElementById("replaceButton");

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        // Send a message to the background script to substitute obscene words
        chrome.runtime.sendMessage({
            action: "substituteObsceneWords"
        }, function (response) {
            console.log(response.status); // Output the response status
        });
    });
});
