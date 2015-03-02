$(document).ready(function() {
if((localStorage.getItem("Name")==null)||(localStorage.getItem("Name")==""))
{
document.getElementById("user").innerHTML="Welcome";
$("#signOut").hide();
$("#signIn").show();
}
else{
document.getElementById("user").innerHTML="Welcome"+" "+localStorage.getItem("Name");
$("#signIn").hide();
}

$("#loginButton").click(function(){
var userName=document.getElementById("userName").value;
var password=document.getElementById("password").value;
if((userName!="")&&(password!=""))
{
if (typeof(Storage) != "undefined") {
    // Store
    localStorage.Name =userName;
document.getElementById("user").innerHTML="Welcome"+" "+localStorage.getItem("Name");
$("#myModal").modal('hide');
$("#signIn").hide();
$("#signOut").show();
 } 
else {
    alert("Sorry, your browser does not support Web Storage...");
}
}
else{
$("#errorMessage").show();

}
});
$("#signOut").click(function(){
localStorage.removeItem("Name");
document.getElementById("user").innerHTML="Welcome";
});
$("#okButton").click(function(){
$("#signOutModal").modal('hide');
$("#signOut").hide();
$("#signIn").show();
//location.reload();
});
});
