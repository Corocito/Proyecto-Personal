//Funcionalidad de la página

//--------------------------------------------------------------------
//Definicion del elemento navLinks para tener acceso a todos los elementos dentro del nav
var navLinks = document.getElementById("navLinks");

//Funciones para mostrar o esconder el menú
//Funcionan editando el tamaño del elemento a la derecha
//Si se encuentra en 0, no tendrá longitud, por lo que estará escondido
function showMenu(){
     navLinks.style.right="0"
}

function hideMenu(){
     navLinks.style.right="-200px"
}