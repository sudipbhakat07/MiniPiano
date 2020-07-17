document.addEventListener('keydown', playSound);
document.addEventListener('keyup', stopSound);

//Function to play sound when key is pressed.

function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    const activeKey = document.querySelector(`div[data-key="${key.keyCode}"]`);

    // console.log(audio);
    // console.log(activeKey);
    //When invalid key is pressed,invalidKey audio will be played.
    
    if (audio === null) {
        let invalidKey = new Audio("sounds/invalidKey.mp3");
        invalidKey.play();
    }

    audio.currentTime = 0;
    audio.play();
    activeKey.classList.add("keyOpacity");
};

//Function to stop playing sound when key is released.

function stopSound(key) {

    const activeKey = document.querySelector(`div[data-key="${key.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);

    if (audio === null) {
        alert("Invalid key! \nPlease press enter to continue.");
    }

    activeKey.classList.remove("keyOpacity");
};
