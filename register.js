window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
    
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var passwordCheck = document.forms["myForm"]["password"].value;
    var passwordCheck1 = document.forms["myForm"]["password1"].value;
    if (passwordCheck != passwordCheck1) {
        alert("Password fail!");
        var errormsgCheck1 = document.getElementById("errormsg").innerHTML = "error";
       
    
        return false;
    } else {
        alert("Password pass!");
    }
}
