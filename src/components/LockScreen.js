import React, { useState} from "react";

function LockScreen() {
     // State for displaying date and time in lock screen
	const [dateAndTime, setDateAndTime] = useState(new Date());
     // Every second we change the state as new time
	setInterval(function () {
		setDateAndTime(new Date());
	}, 1000);

	return (
		<div className="lock-screen">
			<span className="time">{dateAndTime.toLocaleTimeString()}</span>
			<span className="date">{dateAndTime.toLocaleDateString()}</span>
		</div>
	);
}

export default LockScreen;
