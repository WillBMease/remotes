var photoVideo

window.addEventListener("DOMContentLoaded", function() {
	// Grab elements, create settings, etc.
	var photoCanvas = document.getElementById("photo"),
		photoContext = photoCanvas.getContext("2d")
		photoVideo = document.getElementById("video")
		var videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code); 
		};
document.getElementById("snap").addEventListener("click", function() {
	photoContext.drawImage(photoVideo, 0, 0, 640, 480);
});
}, false);

