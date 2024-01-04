
setTimeout(function() {
    var bienvenida = document.getElementById('bienvenida');
    bienvenida.style.display = 'none';
}, 1800); 



function cambiarColor(id, nuevoSrc) {
    document.getElementById(id).src = nuevoSrc;
}


  
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navBar = document.querySelector('header.fixed-top');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function() {
    navBar.classList.toggle('activo');
    const isOpen = navBar.classList.contains('activo');

    if (isOpen) {
      navBar.style.height = window.innerHeight + 'px'; // Establecer la altura como la altura de la ventana
      closeMenu.style.display = 'block';
    } else {
      navBar.style.height = '0'; // Contraer la altura
      closeMenu.style.display = 'none';
    }
  });

  closeMenu.addEventListener('click', function() {
    navBar.classList.remove('activo');
    navBar.style.height = '0'; // Contraer la altura
    closeMenu.style.display = 'none';
  });
});








  
  