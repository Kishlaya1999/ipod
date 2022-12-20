import React from "react";
import "../App.css";

function MusicMenu(props) {
	// We are getting menuVibility and activeTab as props from the parent element i.e. App.js
	// menuVisibility => used for showing and hiding the menu
	// activeMusicTab => used for adding and removing the acitve class from menu

	return (
		<div style={{ display: `${props.menuVisibility === "show" ? "block" : "none"}` }} className="screen-menu">
			<div className="heading-box">
				<h3 className="heading">Music</h3>
			</div>
			<ul>
				<li className={`ipod-menu-items ${props.activeMusicTab === "all_songs" ? "active" : ""}`}>
					<span>All Songs</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
				<li className={`ipod-menu-items ${props.activeMusicTab === "artists" ? "active" : ""}`}>
					<span>Artists</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
				<li className={`ipod-menu-items ${props.activeMusicTab === "albums" ? "active" : ""}`}>
					<span>Albums</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
			</ul>
		</div>
	);
}

export default MusicMenu;
