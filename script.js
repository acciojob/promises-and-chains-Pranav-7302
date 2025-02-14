//your JS code here. If required.
let inputName = document.getElementById('name');
let inputAge = document.getElementById('age');
let button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault()
    let nameValue = inputName.value.trim();
    let ageValue = parseInt(inputAge.value.trim()); // Convert string to number

    if (nameValue === '' || isNaN(ageValue)) {
        alert('Please enter valid details');
        return; // Stop execution if input is invalid
    }

    let promise = new Promise((resolve, reject) => {
        if (ageValue < 18) {
            reject("Oh sorry, " + nameValue + ". You aren't old enough.");
        } else {
            resolve("Welcome, " + nameValue + ". You can vote.");
        }
    });

    setTimeout(() => {
        promise
            .then((message) => alert(message))
            .catch((error) => alert(error));
    }, 4000);
});
