var d = new Date();
var weekday = new Array(7);
	weekday[0] = "SUNDAY";
	weekday[1] = "MONDAY";
	weekday[2] = "TUESDAY";
	weekday[3] = "WEDNESDAY";
	weekday[4] = "THURSDAY";
	weekday[5] = "FRIDAY";
	weekday[6] = "SATURDAY";		
var i = 0;	
var n = weekday[d.getDay()];
var speed = 400;
function pleaseWork() {
	document.getElementById("para").innerHTML += n.charAt(i);
		i++;
		setTimeout(pleaseWork, speed);
	var txt = "Wonderful Tuesday!";
	if (n == "TUESDAY") {
		document.getElementById("meta").innerHTML = txt;
	}
	else if (n == "SUNDAY") {
		document.getElementById("meta").innerHTML = "Glorious Sunday!";
	}
	else if (n == "MONDAY") {
		document.getElementById("meta").innerHTML = "First Work Day!";
	}
	else if (n == "WEDNESDAY") {
		document.getElementById("meta").innerHTML = "Middle Of The Week!";
	}
	else if (n == "THURSDAY") {
		document.getElementById("meta").innerHTML = " 2 Days To Weekend!";
	}
	else if (n == "FRIDAY") {
		document.getElementById("meta").innerHTML = "TGIF!";
	}
	else{
		document.getElementById("meta").innerHTML = "Freeday!";
	}
}