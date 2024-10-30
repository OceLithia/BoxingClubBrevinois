// checker le nom
export function nameValidator(name) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  return nameRegex.test(name);
}
//check le prenom
export function surnameValidator(surname) {
  const surnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  return surnameRegex.test(surname);
}
// checker l'email
export function mailValidator(mail) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(mail);
}

//check du msg
export function msgValidator() {
  const form = document.querySelector(".contact-form"); // Si contact-form est une classe, sinon utilise # pour un id

  form.addEventListener("submit", function (event) {
    const textarea = document.getElementById("msg");
    if (textarea.value.trim() === "") {
      event.preventDefault(); // Empêche l'envoi du formulaire
      alert("Merci de remplir le champ message.");
    }
  });
}

function validateField(input) {
  const inputValue = input.value.trim();
  const $errorElement = document.getElementById(`${input.id}-error`);

  let isValid = true;
  let errorMessage = "";

  switch (input.id) {
    case "name":
      if (!nameValidator(inputValue)) {
        errorMessage = "Merci de saisir votre nom.";
        isValid = false;
      }
      break;
    case "surname":
      if (!surnameValidator(inputValue)) {
        errorMessage = "Merci de saisir un prénom.";
        isValid = false;
      }
      break;
    case "mail":
      if (!mailValidator(inputValue)) {
        errorMessage =
          "Merci de saisir un email valide type : exemple@exmple.com.";
        isValid = false;
      }
      break;
    case "msg":
      if (!msgValidator(inputValue)) {
        errorMessage = "Merci de saisir votre message.";
        isValid = false;
      }
      break;
  }

  if (!isValid) {
    $errorElement.textContent = errorMessage;
    $errorElement.classList.remove("hidden");
  } else {
    $errorElement.textContent = "";
    $errorElement.classList.add("hidden");
  }

  return isValid;
}
