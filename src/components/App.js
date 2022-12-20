import React, { useState } from "react";
import "../App.css";
import ZingTouch from "zingtouch";
import ScreenMenu from "./ScreenMenu";
import MusicMenu from "./MusicMenu";
import AllSongs from "./AllSongs";
import atristsImage from "../assets/artists.jpg";
import albumsImage from "../assets/albums.jpg";
import LockScreen from "./LockScreen";

function App() {
	// State that changes background screen
	const [active, setActive] = useState("cover");
	// State that changes the active color i.e blue when we are on music screen
	const [activeMusicTab, setActiveMusicTab] = useState("all_songs");
	// State that toggles the menu Possible states: [show,hidden] ; Default State: show
	const [menu, setMenu] = useState("hidden");
	// State that changes the screen image Possible states : [depends on the user "active" state]
	const [image, setImage] = useState("https://tinyurl.com/2p85ka6e");
	// State that tracks which menu to be showen if isMusic is false then we show default menu on left side otherwise we show different menu which contains options such as All Songs , artists and albums
	const [isMusic, setIsMusic] = useState(false);
	// State that shows the music playing page if it is false then we show the other screens according to the other states ohterwise we show the music playing page
	const [allSongs, setAllSongs] = useState(false);
	// State that tracks lock button i.e if false the unlocked otherwise locked
	const [isLock, setIsLock] = useState(false);

	// We want to attact the gesture on a DOM element and we can only attact if it is available in the DOM that's why we put it in setTimeout so that it runs in the end and gesture can be attached
	setTimeout(function () {
		// selecting the box on which we want to apply gesture using ZingTouch
		let box = document.querySelector("#outer-box");
		let activeRegion = new ZingTouch.Region(box);

		activeRegion.bind(box, "rotate", function (e) {
			// console.log(e.detail.angle);
			// we are getting the angle based on the current position of mouse pointer
			let angle = e.detail.angle;
			// if isMusic is false i.e. when we are on the default screen which has Menu : [Cover flow, Music, Games, Settings]
			if (isMusic === false) {
				// Setting the background color of the state by adding the appropriate class it based on angle
				// changeing the active state bassed on the angle the mouse pointer is present
				if (angle > 225 && 315 <= angle) {
					setActive("cover");
				} else if (angle > 135 && 180 <= angle) {
					setActive("music");
				} else if (angle > 45 && 135 <= angle) {
					setActive("game");
				} else if (angle > 0 && 45 <= angle) {
					setActive("setting");
				}
			} else {
				// if we are on the music tab
				if (angle > 240 && angle <= 360) {
					setActiveMusicTab("albums");
				} else if (angle > 120 && angle <= 240) {
					setActiveMusicTab("artists");
				} else if (angle > 0 && angle <= 120) {
					setActiveMusicTab("all_songs");
				}
			}
		});
	}, 0);

	// This function handles the background image of screen
	const changeScreen = () => {
		// if isMusic is false it means we are on home screen and the menu shown contains ["Cover flow","Music","Games","Settings"]
		if (isMusic === false) {
			if (active === "cover") {
				setImage("https://tinyurl.com/2p85ka6e");
			} else if (active === "music") {
				setImage("https://tinyurl.com/mr8y2abm");
				setIsMusic(true);
				setMenu("show");
			} else if (active === "game") {
				setImage("https://tinyurl.com/25vadmdu");
				setMenu("hidden");
			} else if (active === "setting") {
				setImage("https://tinyurl.com/yz96pazv");
				setMenu("hidden");
			}
		}
		// if isMusic is true then it means that the menu shown contains ["All Songs","Artists","Albums"]
		else {
			// console.log("Inside music menu");
			if (activeMusicTab === "all_songs") {
				setAllSongs(true);
			} else if (activeMusicTab === "artists") {
				// console.log("Artists");
				setImage(atristsImage);
				setMenu("hidden");
			} else if (activeMusicTab === "albums") {
				// console.log("Albums");
				setImage(albumsImage);
				setMenu("hidden");
			}
		}
	};

	// This function handles the hiding or showing the menu on screen
	const toggleMenuBar = () => {
		// We are on the music screen so changing the background image as music
		setImage("https://tinyurl.com/2p85ka6e");
		if (isMusic === false) {
			if (menu === "show") {
				setMenu("hidden");
			} else {
				setMenu("show");
			}
		} else if (isMusic === true) {
			// setIsMusic(false);
			if (menu === "hidden") {
				setMenu("show");
				setImage("https://tinyurl.com/mr8y2abm");
			} else if (menu === "show") {
				setIsMusic(false);
			}
			// setMenu("show");
			setAllSongs(false);
		}
	};

	// This function hadles the locking and unlocking the ipod
	const toggleLock = (e) => {
		// if isLock is true it menas the ipod is lock and we have to change the state of isLock so that it gets unlocked
		if (isLock === true) {
			setIsLock(false);
			e.target.style.marginLeft = "40px";
		}
		// if isLock is false it menas the ipod is unlock and we have to change the state of isLock so that it gets ulocked
		else {
			setIsLock(true);
			e.target.style.marginLeft = "50px";
		}
	};

	return (
		<React.Fragment>
			<div onClick={toggleLock} className="lock-btn"></div>
			<div className="ipod">
				{/* Screen */}
				<div className="screen">
					{/* if isLock is true (i.e screen is locked) then only displaying the lock screen */
					/* Lock Screen would be only rendered only if isLocked is true */}
					{isLock && <LockScreen />}
					{/* if allSongs is true then only display the AllSongs screen */}
					{allSongs && <AllSongs />}
					<img className="screen-img" src={image} alt="" />
					{/* if isMusic is false we will render the default menu */}
					{!isMusic && <ScreenMenu menuVisibility={menu} activeTab={active} />}
					{/* if isMusic is true then we will render the music menu */}
					{isMusic && <MusicMenu menuVisibility={menu} activeMusicTab={activeMusicTab} isMusic={isMusic} />}
				</div>

				{/* Navigation Menu */}
				<div className="navigation-menu">
					<div id="outer-box" className="outer">
						<span onClick={toggleMenuBar} className="menu">
							MENU
						</span>
						<i className="fa-solid fa-backward-fast"></i>
						<div onClick={changeScreen} className="inner">
							<i className="fa-brands fa-apple"></i>
						</div>
						<i className="fa-solid fa-forward-fast"></i>
						<i className="fa-solid fa-forward-step fwd"></i>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
