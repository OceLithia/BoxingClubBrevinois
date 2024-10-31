//import fonction validator formulaire

import { initForm } from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
  //recuperer le 'chemin' html
  const path = window.location.pathname;

  //check si on est sur le memory
  if (path.endsWith("contact.html")) {
    initForm();
  }
});
