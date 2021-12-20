//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b


const queryString = window.location.href;
var foundToken = false;

if (localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f") != null) {
    foundToken = true;
    document.getElementById('machine-name').textContent = "Machine name: FSQR12";
    document.getElementById('condition').textContent = "Please select machine condition:";
    document.getElementById('condition-choices1').textContent = "O DOWN";
    document.getElementById('condition-choices2').textContent = "O LIMPING";
    document.getElementById('condition-choices3').textContent = "O UP";
    document.getElementById('details').textContent = "(Details textbox here)";
    document.getElementById('submit-button').textContent = "(Submit button here)";




}
else {
    document.getElementById('isfound-text').textContent = "Unrecognized user!\nPlease refer to IT"
}