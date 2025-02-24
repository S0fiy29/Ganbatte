// Get the audio element
var audio = document.getElementById("backgroundAudio");

// Check if the audio is already playing (stored in local storage)
var isAudioPlaying = localStorage.getItem("isAudioPlaying");

if (isAudioPlaying === "true") {
    // If the audio was playing, keep playing
    audio.play();
} else {
    // If the audio was not playing, pause it
    audio.pause();
}

// Save the audio state to local storage when it changes
audio.addEventListener("play", function() {
    localStorage.setItem("isAudioPlaying", "true");
});

audio.addEventListener("pause", function() {
    localStorage.setItem("isAudioPlaying", "false");
});