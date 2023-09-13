window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username')
    const password = urlParams.get('password')

	var usernameCheck = document.forms["myLogin"]["username"].value;
	var passwaordRe_Check = document.forms["myLogin"]["password"].value;
	
    if (usernameCheck != username) {
        alert("Username fail!");
        return false;
    } else if (passwaordRe_Check != password) {
        alert("Password fail!");
        return false;
    } else if (usernameCheck == username && passwaordRe_Check != password) {
        alert("Username Pass , Password Fail");
		return false;
    } else if (usernameCheck != username && passwaordRe_Check == password) {
        alert("Username Fail , Password Pass");
    } else {
		alert("Username Pass , Password Pass");
	}

	// if (usernameCheck != username) {
    //     alert("Username fail!");
    //     return false;
    // } else {
    //     alert("Username Pass , Password Pass");
    // }
}

			