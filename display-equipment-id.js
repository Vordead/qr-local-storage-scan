const queryString = window.location.href;

function displayEquipmentId() {
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
    var token = queryString.substring(index + 1);
    document.getElementById('equipment-id').innerHTML = token;
    // I can only set 1 token with key employee, if I set another one
    //with same key it will be overriden.
}

displayEquipmentId();