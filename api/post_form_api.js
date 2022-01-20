const queryString = window.location.href;
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


const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "equipmentId": parseInt(equipment_id),
        "createdById": parseInt(localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f")),
        "title": document.querySelector('input[name="priority"]:checked').value,
        "description": document.querySelector('textarea').value,
        "isSafetyIssue": document.getElementById('safe-issue').checked,
        "equipmentConditionId": document.querySelector('input[name="condition"]:checked').value,
        "workOrderNumber": "WO12345678"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };
    console.log(raw)
    fetch("https://phoneservices.azurewebsites.net/api/WorkOrders?code=bP3n9xcaKQ/l5xPKNjS5r1nT/EwgWImkj6WfDHwDZbWE5UBH220sAg==", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            alert("The form was submitted: " + result)
        })
        .catch(error => {
            console.log('error', error)
            alert(error)
        });
}