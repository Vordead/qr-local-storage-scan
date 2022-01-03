//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b


const queryString = window.location.href;
var foundToken = false; //to be used later

if (localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f") != null) {
    foundToken = true;
    window.location = "report.html";
} else {
    document.getElementById('h1').textContent = "Unrecognized user!";
    document.getElementById('h2').textContent = "Please refer to IT";
}
