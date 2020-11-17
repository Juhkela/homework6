var video = document.getElementById(myVideo);

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = (document.querySelector("#volumeSlider").value)/100;
	document.getElementById("volume").innerHTML = volumeSlider.value + "%";
	console.log(volumeSlider.value);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .90;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .90;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	if (video.ended) {
		video.load();
		video.play();
	}
	console.log("Video Time is at: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").classList.add("oldTime");
	console.log("Oldschool");
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").classList.remove("oldTime");
	console.log("Original");
});

