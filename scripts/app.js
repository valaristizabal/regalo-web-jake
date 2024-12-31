const contrasenaEscrita = document.querySelector('.contrasena-escrita')
const botones = document.querySelectorAll('.key')
const botonBorrar = document.querySelector('.borrar')

let contrasena = ""; //arreglo que almacene los números de la contraseña

function manejarClick(event) {
    const valorBoton = event.target.getAttribute('data-key');  // Obtener el valor del botón con data-key

    if (valorBoton == 'borrar') {
        contrasena = contrasena.slice(0, -1); //si el botón es el de borrar, eliminamos el último número ingresado
    } else {
        contrasena += valorBoton; //si el botón no es el de borrar, vamos añadiendolo al arreglo de números por 
    }

    // Mostrar la contraseña oculta como asteriscos
    contrasenaEscrita.textContent = contrasena.replace(/./g, "*");

    // validación cuando se termine de ingresar la contraseña   
    if (contrasena.length === 6) {
        setTimeout(() => {
            if (contrasena === "010724") {
                Swal.fire({
                    icon: 'success',
                    title: '¡Contraseña correcta!',
                    text: 'Acceso concedido.',
                    confirmButtonText: 'Aceptar',
                    background: '#1e1e1e',
                    color: '#fff',
                    confirmButtonColor: '#4caf50',
                    customClass: {
                        popup: 'my-swal-popup'
                    }
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '¡Contraseña correcta!',
                    text: 'Acceso concedido.',
                    confirmButtonText: 'Aceptar',
                    background: '#1e1e1e',
                    color: '#fff',
                    confirmButtonColor: '#4caf50',
                    showClass: {
                        popup: 'swal2-fade swal2-show',
                        backdrop: 'swal2-backdrop-show' // Esto puede evitar que el fondo oscuro se apodere de la página
                    },
                    hideClass: {
                        popup: 'swal2-fade swal2-hide',
                        backdrop: 'swal2-backdrop-hide'
                    }
                });
                
                
                contrasena = ""; // Limpiar la contraseña para que intente de nuevo
                contrasenaEscrita.textContent = ""; // Limpiar el campo visual
            }
        }, 300);
    }
}

//Asignamos la funcion a los botones
botones.forEach(boton => {
    boton.addEventListener('click', manejarClick);
});

botonBorrar.addEventListener('click', manejarClick);
