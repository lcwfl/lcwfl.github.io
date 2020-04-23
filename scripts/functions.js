var modifieddate = new Date();
var copyyear = modifieddate.getfullyear;

function Index(){
    document.getElementById("copy").innerHTML = copyyear;
    document.getElementById("modified").innerHTML = "Last Updated: " + document.lastModified;

};
