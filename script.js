// script.js
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });

  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const toEmail = "your-email@example.com";

    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const emailContent = `
            Name: ${formDataObject.name}
            Email: ${formDataObject.email}
            Message: ${formDataObject.message}
        `;

    // You can use a service like Email.js or a server-side script to send emails
    console.log("Sending email:", emailContent);
    // Add your email sending logic here

    // You may also want to display a success message to the user
    alert("Message sent successfully!");
    contactForm.reset();
  });
});

let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 50);
});
