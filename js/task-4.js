
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value.trim();
    });
    if (!userData.email || !userData.password) {
        alert('All fields must be filled!');
        return;
    }

    console.log(userData);

    loginForm.reset();
    alert('Form submitted successfully!');
});
