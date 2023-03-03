const contactForm = document.getElementById("contact_form");
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log(formData);

    fetch("/contactFormSubmit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify(formData),
    }).then(response => {
        response.json().then(data => {
            console.log(data);
        });
    });

    /*name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";*/
})