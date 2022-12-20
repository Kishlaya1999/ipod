import React from "react";
import "../App.css";

// it is the default menu we is shown on the home screen 
function ScreenMenu(props) {
	// We are getting menuVibility and activeTab as props from the parent element i.e. App.js
	// menuVisibility => used for showing and hiding the menu
	// activeTab => used for adding and removing the acitve class from menu 
	return (
		<div style={{ display: `${props.menuVisibility === "show" ? "block" : "none"}` }} className="screen-menu">
			<div className="heading-box">
				<h3 className="heading">iPod</h3>
			</div>
			<ul className="ipod-menu">
				<li className={`ipod-menu-items ${props.activeTab === "cover" ? "active" : ""}`}>
					<span>Cover Flow</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
				<li className={`ipod-menu-items ${props.activeTab === "music" ? "active" : ""}`}>
					<span>Music</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
				<li className={`ipod-menu-items ${props.activeTab === "game" ? "active" : ""}`}>
					<span>Games</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
				<li className={`ipod-menu-items ${props.activeTab === "setting" ? "active" : ""}`}>
					<span>Settings</span>
					<i className="fa-solid fa-chevron-right"></i>
				</li>
			</ul>
		</div>
	);
}

export default ScreenMenu;
