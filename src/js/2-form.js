const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
    const formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert("Fill please all fields");
        return; 
    }

    const formData = { email, message };
    console.log("Form Data:", formData);

    localStorage.removeItem("feedback-form-state");

    form.reset();
})