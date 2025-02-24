var audio = new Audio();

function playAudio(audioPath) {
    audio.src = audioPath;

    function onCanPlay() {
        console.log("Audio is now ready for playback.");
        audio.play()
            .then(() => {
                console.log("Audio is now playing.");
            })
            .catch(error => {
                console.error("Error playing audio:", error);
            });

        audio.removeEventListener('canplay', onCanPlay);
    }

    audio.addEventListener('canplay', onCanPlay);

    if (audio.readyState >= 2) {
        onCanPlay();
    } else {
        console.log("Audio not ready yet. Please wait.");
    }
}
