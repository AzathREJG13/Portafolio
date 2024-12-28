document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item'); // Todos los botones del menú
    const sections = document.querySelectorAll('section'); // Todas las secciones

    // Función para manejar el resaltado de los botones según la sección visible
    function highlightMenu() {
        let currentSection = '';

        sections.forEach(section => {
            // Si la sección está en el viewport (en la pantalla)
            if (window.scrollY >= section.offsetTop - 200 && window.scrollY < section.offsetTop + section.offsetHeight) {
                currentSection = section.id; // Asigna el ID de la sección visible
            }
        });

        // Resalta el botón correspondiente a la sección visible
        menuItems.forEach(item => {
            item.classList.remove('active'); // Elimina la clase 'active' de todos los botones
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active'); // Agrega la clase 'active' al botón correspondiente
            }
        });
    }

    // Detecta el evento de scroll y aplica la función para resaltar el botón correspondiente
    window.addEventListener('scroll', highlightMenu);

    // Añadir scroll suave al hacer clic en los botones
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(item.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajustar para compensar la barra de navegación
                behavior: 'smooth'
            });
        });
    });
});
