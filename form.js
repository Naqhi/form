function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var languages = document.querySelectorAll('input[name="language"]:checked');
    var course = document.getElementById('course').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || phone === "") {
        alert("Name, Email, and Phone are required fields");
        return false;
    }
    if (phone.length !== 10) {
    alert("Phone number must have exactly 10 digits");
    return false;
}
displayData(name, email, phone, address, dob, gender, languages, course, message);

return false;

function displayData(name, email, phone, address, dob, gender, languages, course, message) {
    // Create a new div element to display the entered data
    var displayDiv = document.createElement('div');
    displayDiv.innerHTML = "<h2>Entered Data:</h2>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>Address:</strong> " + address + "</p>" +
        "<p><strong>DOB:</strong> " + dob + "</p>" +
        "<p><strong>Gender:</strong> " + (gender ? gender.value : "") + "</p>" +
        "<p><strong>Languages:</strong> " + getCheckedValues(languages) + "</p>" +
        "<p><strong>Course:</strong> " + course + "</p>" +
        "<p><strong>Message:</strong> " + message + "</p>";

    // Append the new div to the body
    document.body.appendChild(displayDiv);
}

function getCheckedValues(checkboxes) {
    var values = [];
    for (var i = 0; i < checkboxes.length; i++) {
        values.push(checkboxes[i].value);
    }
    return values.join(", ");
}


    // Add more validation as needed

    return true;
}