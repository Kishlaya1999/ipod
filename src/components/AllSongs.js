import React,{useState} from "react";
import "../App.css";
import song from "../assets/HeatWaves.mp3";

function AllSongs() {

	const [controlBtnClass, setControlBtnClass] = useState("fa-solid fa-play");

	setTimeout(function () {
		let music = document.getElementById("audio");
		let progressBar = document.getElementById("progress-bar");

		// for showing the progress theat sound is playing
		music.ontimeupdate = function () {
			// console.log((music.currentTime / music.duration) * 100);
			let progress = document.getElementById("progress");
			progress.style.width = Math.floor((music.currentTime / music.duration) * 100) + "%";
		};

		// on clicking the progress bar music also starts according to the place clicked
		progressBar.onclick = function (e) {
			music.currentTime = (e.offsetX / progressBar.offsetWidth) * music.duration;
		};
	}, 0);

	const playAndPauseMusic = () => {
		let audio = document.getElementById("audio");

		if (controlBtnClass === "fa-solid fa-play"){
			setControlBtnClass("fa-solid fa-pause");
			audio.play()
		}else if(controlBtnClass === "fa-solid fa-pause"){
			setControlBtnClass("fa-solid fa-play")
			audio.pause();
		} 
	}

	return (
		<div className="all-songs">
			<audio src={song} id="audio"  style={{ display: "block" }}></audio>

			<div className="song">
				<div className="song-img">
					<img src="https://tinyurl.com/3zzy39yu" alt="" />
				</div>
				<div className="song-info">
					<h3>Heat Waves</h3>
					<span>Artist: Glass Animals</span>
					<span>Album: Dreamland</span>
					<span>2020</span>
				</div>
			</div>
			<div className="music-controls-and-progress-bar">

				<i onClick={playAndPauseMusic} className={controlBtnClass}></i>

				<div className="progress-bar" id="progress-bar">
					<div className="progress" id="progress"></div>
				</div>
			</div>
		</div>
	);
}

export default AllSongs;
