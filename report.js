//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b



const queryString = window.location.href;



if (localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f") != null) {
    foundToken = true;
    console.log(queryString);
    var index;
    for (let i = 0; i < queryString.length; i++) {
        console.log(queryString[i]);
        if (queryString[i] == "=") {
            index = i;
            console.log(index)
            break;
        }
    }
    var equipment_id = queryString.substring(index + 1);
    console.log(equipment_id);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://phoneservices.azurewebsites.net/api/equipment?code=yMYfkKhLd/SVVDNdTuKCKRj0d973Wd2UurFka1IwPvD04W9ACd1hEA==&id=" + equipment_id, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            document.getElementById('equipment-id').innerHTML = result;
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('equipment-id').innerHTML = result;
        });

    window.location = "report.html";
} else {
    document.getElementById('h1').textContent = "Unrecognized user!";
    document.getElementById('h2').textContent = "Please refer to IT";
}