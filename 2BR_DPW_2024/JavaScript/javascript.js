// Seleccionamos todas las secciones y los enlaces de navegación
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

let currentSectionIndex = 0; // Índice de la sección actual

// Función para desplazarse a la sección específica
function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSectionIndex = index;
  }
}

// Evento de la rueda del mouse para desplazarse entre secciones
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    // Desplazamiento hacia abajo
    scrollToSection(currentSectionIndex + 1);
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    // Desplazamiento hacia arriba
    scrollToSection(currentSectionIndex - 1);
  }
});

// Evento de clic en los enlaces de navegación
navLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita el desplazamiento predeterminado del navegador
    scrollToSection(index); // Llama a la función de desplazamiento con el índice correcto
  })
});

document.getElementById("desktop-view").addEventListener("click", function() {
  document.body.className = "desktop"; // Establece la vista de escritorio
  setActiveIcon("desktop-view");
});

document.getElementById("tablet-view").addEventListener("click", function() {
  document.body.className = "tablet"; // Establece la vista de tablet
  setActiveIcon("tablet-view");
});

document.getElementById("mobile-view").addEventListener("click", function() {
  document.body.className = "mobile"; // Establece la vista de móvil
  setActiveIcon("mobile-view");
});

function setActiveIcon(id) {
  document.querySelectorAll(".icon").forEach(function(icon) {
    icon.classList.remove("active");
  });
  
  document.getElementById(id).classList.add("active");
}

function buscar() {
  // Obtener el valor de la entrada de búsqueda
  let input = document.getElementById('search-input').value.toLowerCase();
  let resultados = document.getElementById('search-results');

  resultados.innerHTML = '';

  let items = [
    'Hamburguesa clásica',
    'Hamburguesa extra grasa quintuple carne',
    'Hamburguesa Fede',
    'Hamburguesa Pro Max',
    'Hamburguesa dorada'
  ];

  // Filtrar los elementos que coincidan con la búsqueda
  let filteredItems = items.filter(item => item.toLowerCase().includes(input));
  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      let div = document.createElement('div');
      div.textContent = item;
      resultados.appendChild(div);
    });
  } else {
    resultados.textContent = 'No se encontraron resultados';
  }
}
