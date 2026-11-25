
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const yourEmail = "YOUR_EMAIL@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio Enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + yourEmail +
        "?subject=" + subject +
        "&body=" + body;
});
