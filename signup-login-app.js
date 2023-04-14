function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

};

function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["pass"].value;
    if (x == "" || y=="") {
      alert("Please fill out all the fields");
      return false;
    }
  }

function formF() {
    var a = document.forms["myform"]["name"].value;
    var b = document.forms["myform"]["email"].value;
    var c = document.forms["myform"]["passw"].value;
    var d = document.forms["myform"]["passc"].value;
    if (a == "" || b=="" || c=="" || d=="") {
      alert("Please fill out all the fields");
      return false;
    }
    if(c!=d) 
    {
        alert("Passwords do not match!");
        return false;
    }
  }  

function goHome()
{
    window.open("home.html");
}