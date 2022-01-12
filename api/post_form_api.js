const handleSubmit = (e) => {
    console.log("test")
    e.preventDefault();
    const form_request = {
        "equipmentId": parseInt(document.getElementById("equipment-id").innerText),
        "createdById": parseInt(localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f")),
        "title": document.getElementById("priority").value,
        "description": document.querySelector('textarea').value,
        "isSafetyIssue": document.getElementById('safe-issue').checked,
        "equipmentConditionId": document.querySelector('input[name="condition"]:checked').value,
        "workOrderNumber": "WO12345678"
    };
    console.log(form_request);
    console.log(JSON.stringify(form_request))
    // setIsPending(true);
    fetch('https://phoneservices.azurewebsites.net/api/WorkOrders?code=bP3n9xcaKQ/l5xPKNjS5r1nT/EwgWImkj6WfDHwDZbWE5UBH220sAg==', {
        method: 'POST',
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form_request),
    }).then((response) => {
        console.log(response.body);
        console.log('Success');
    })
}


// const method1 = () => {
//     alert()
//     return false;
// }