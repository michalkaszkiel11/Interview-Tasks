const bubble = document.querySelector(".bubble");
bubble.addEventListener("mousedown", function (e) {
    bubble.style.width = "25vw";
    bubble.style.height = "25vh";
    bubble.style.transitionDuration = "10s";
});
bubble.addEventListener("mouseup", function (e) {
    bubble.style.width = "5vw";
    bubble.style.height = "5vh";
    bubble.style.transitionDuration = "3s";
});

// let isSpacePressed = false;
// document.addEventListener("keydown", function (event) {
//     if (event.code === "Space") {
//         // Store the current size
//         bubbleSize = parseInt(getComputedStyle(bubble).width, 10);
//         // Grow the bubble to 100px on spacebar press
//         bubble.style.width = "100px";
//         bubble.style.height = "100px";
//     }
// });

// document.addEventListener("keyup", function (event) {
//     if (event.code === "Space") {
//         // Set back the bubble size when the spacebar is released
//         bubble.style.width = bubbleSize + "px";
//         bubble.style.height = bubbleSize + "px";
//     }
// });
let isSpacePressed = false;

document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !isSpacePressed) {
        isSpacePressed = true;
        // Grow the bubble when the spacebar is pressed
        bubble.style.width = "40vw";
        bubble.style.height = "40vh";
    }
});

document.addEventListener("keyup", function (event) {
    if (event.code === "Space") {
        isSpacePressed = false;
        // Reset the bubble size when the spacebar is released
        const bubbleSize = bubble.getBoundingClientRect();
        bubble.style.width = bubbleSize.width + "px";
        bubble.style.height = bubbleSize.height + "px";
    }
});
