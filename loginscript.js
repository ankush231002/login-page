
document.addEventListener("DOMContentLoaded", () => {
   const loginForm = document.querySelector("#login");
   const createAccountForm = document.querySelector("#createAccount");

   document.querySelector("#linkCreateAccount").addEventListener("click", e => {
       e.preventDefault();
       loginForm.classList.add("form__hidden");
       createAccountForm.classList.remove("form__hidden");
   });

   document.querySelector("#linkLogin").addEventListener("click", e => {
       e.preventDefault();
       loginForm.classList.remove("form__hidden");
       createAccountForm.classList.add("form__hidden");
   });

   loginForm.addEventListener("submit", e => {
       e.preventDefault();

       // Perform your AJAX/Fetch login

       setFormMessage(loginForm, "error", "Invalid username/password combination");
   });

   document.querySelectorAll(".form__input").forEach(inputElement => {
       inputElement.addEventListener("blur", e => {
           if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
               setInputError(inputElement, "Username must be at least 10 characters in length");
           }
       });

       inputElement.addEventListener("input", e => {
           clearInputError(inputElement);
       });
   });
})