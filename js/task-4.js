const loginForm = document.querySelector(".login-form");
const message = document.createElement("p");
loginForm.after(message); 

loginForm.addEventListener("submit", event => {
  event.preventDefault(); 

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (!email || !password) {
    message.textContent = "All fields are required.";
    message.style.color = "red";
    return;
  }

  message.textContent = "alert";
  
  console.log({ email, password });

  loginForm.reset();
});
