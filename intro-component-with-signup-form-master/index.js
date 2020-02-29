var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var regex = /^([a-zA-Z0-9\.!#$%^&*_]+)@([a-zA-Z0-9]+)\.([a-z]){2,8}(\.[a-z]){2,8}  &/


function validate(){



if(fname.value.trim() == ""){
fname.classList.add("error");
document.getElementByClassName("lbl")[0].style.visibility="visible";
document.getElementByClassName("br")[0].classList.remove("errorbr");
return false;

}


else if(lname.value.trim() == ""){
lname.classList.add("error");
document.getElementByClassName("lbl")[1].style.visibility="visible";
document.getElementByClassName("br")[1].classList.remove("errorbr");
return false;

}

else if(fname.value.trim() == ""){
email.classList.add("error");
document.getElementByClassName("lbl")[2].style.visibility="visible";
document.getElementByClassName("br")[2].classList.remove("errorbr");
return false;

}

else if(pass.value.trim() == ""){
fname.classList.add("error");
document.getElementByClassName("lbl")[3].style.visibility="visible";
document.getElementByClassName("br")[3].classList.remove("errorbr");
return false;

}
else{
  return true;
}

}
