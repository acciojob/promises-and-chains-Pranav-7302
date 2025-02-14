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

     new Promise((resolve, reject) => {
        if (ageValue < 18) {
          setTimeout(() => {
            reject("Oh sorry " + nameValue + ". You aren't old enough.");
          }, 4000);
        } else {
            setTimeout(() => {
                resolve("Welcome, " + nameValue + ". You can vote.");
            }, 4000);
        }
    })
            .then((message) => alert(message))
            .catch((error) => alert(error));
});
