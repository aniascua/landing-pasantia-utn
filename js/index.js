document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos todos los elementos con la clase "dropdown-toggle"
    const dropdownToggleButtons = document.querySelectorAll(".dropdown-toggle");
  
    // Iteramos sobre los botones y agregamos un evento "click"
    dropdownToggleButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace se abra al hacer clic en él
        const dropdownMenu = this.nextElementSibling; // Obtenemos el menú desplegable
  
        // Alternamos la clase "show" para mostrar u ocultar el menú desplegable
        if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
        } else {
          dropdownMenu.style.display = "block";
        }
      });
    });
  });
 
  
  
  
  