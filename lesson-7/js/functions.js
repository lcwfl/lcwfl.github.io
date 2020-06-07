var d = new Date();
var n = d.getFullYear();

function Index(){
    document.getElementById("copy").innerHTML = n;
    document.getElementById("modified").innerHTML = "Last Updated: " + document.lastModified;

};

/* Hamburger Menu */
function toggleMenu() {
    document.getElementsByClassName("navmenu")[0].classList.toggle("responsive");
     }

