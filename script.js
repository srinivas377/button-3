document.getElementById("toggleButton").addEventListener("click", function() {
    const body = document.body;
    const container = document.getElementById("container");
    const text = document.getElementById("text");
    const button = document.getElementById("toggleButton");

    if (body.style.backgroundImage.includes('background-image.jpg')) {
        body.style.backgroundImage = "url('background-image-2.jpg')"; 
        container.style.backgroundColor = "rgba(252, 129, 129, 0.85)"; 
        text.textContent = "Thank You for Visiting!";
        button.textContent = "Click to Revert";
        button.style.backgroundColor = "#c53030";
    } else {
        body.style.backgroundImage = "url('background-image.jpg')"; 
        container.style.backgroundColor = "rgba(90, 103, 216, 0.85)"; 
        text.textContent = "Welcome to Our Site";
        button.textContent = "Click to Change";
        button.style.backgroundColor = "#2b6cb0"; 
});
