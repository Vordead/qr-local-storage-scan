const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "equipmentId": parseInt(document.getElementById("equipment-id").innerText),
        "createdById": parseInt(localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f")),
        "title": document.getElementById("priority").value,
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

    fetch("https://phoneservices.azurewebsites.net/api/WorkOrders?code=bP3n9xcaKQ/l5xPKNjS5r1nT/EwgWImkj6WfDHwDZbWE5UBH220sAg==", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            alert("The form was submitted: " + result)
        }
        )
        .catch(error => {
            console.log('error', error)
            alert(error)
        });
}