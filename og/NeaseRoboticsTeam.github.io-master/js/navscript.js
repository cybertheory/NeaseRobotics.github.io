function mobileNav(){

  if(document.getElementById("di").value!="ON"){
    document.getElementById("di").value="ON";
    document.getElementById("di").style.display = "block";
    document.getElementById("dii").className = "dropitemsimgup";
    document.getElementById("di").className = "dropped-div-transition-down";
 }else{
    document.getElementById("di").value="OFF";
    document.getElementById("di").style.display = "none";
    document.getElementById("dii").className = "dropitemsimgdown";
    document.getElementById("di").className = "dropped-div-transition-up";
 }
}
