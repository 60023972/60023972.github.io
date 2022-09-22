function toggle(obj) {
	var obj = document.getElementById(obj);
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	
	if (email.length > 0 && subject.length > 0 && message.length > 0 && isEmail(email) && obj.style.display != "block") {
		obj.style.display = "block";
	}
}

function isEmail(email) {
	var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
	return re.test(email);
}
