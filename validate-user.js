const queryString = window.location.href;
//196b95d9-c2bb-4549-8ee0-128a264df39f is the key in local storage,
if (localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f") != null) {
    var index;
    for (let i = 0; i < queryString.length; i++) {
        console.log(queryString[i]);
        if (queryString[i] == "=") {
            index = i;
            break;
        }
    }
    var equipment_id = queryString.substring(index + 1);
    window.location = "report.html?id=" + equipment_id;
} else {
    document.getElementById('h1').textContent = "Unrecognized user!";
    document.getElementById('h2').textContent = "Please refer to IT";
}