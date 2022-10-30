
/*
const val = document.querySelector('form')

val.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarnos, te responderemos a la brevedad')
    }
}  */

//const val = document.querySelector('form')
//val.addEventListener('submit', valida_envia)
   
async function valida_envia(event){
  //valida el nombre
  if (document.fvalida.fname.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.fname.focus()
       return 0;
  }

  //valida el apellido
  if (document.fvalida.fapellido.value.length==0){
    alert("Tiene que escribir su apellido")
    document.fvalida.fapellido.focus()
    return 0;
}

  //valido la dirección
  if (document.fvalida.fdire.value.length==0){
    alert("Tiene que escribir su dirección")
    document.fvalida.fdire.focus()
    return 0;
}

  //valido la ciudad
  if (document.fvalida.fciudad.value.length==0){
    alert("Tiene que escribir una ciudad")
    document.fvalida.fciudad.focus()
    return 0;
  }
  
  cp = document.fvalida.fcodigo.value
  cp = validarEntero(cp)
  document.fvalida.fcodigo.value=cp
  if (cp==""){
       alert("Tiene que introducir un codigo postal (valor numerico).")
       document.fvalida.fcodigo.focus()
       return 0;
  }

  //valido el email
  
  var valor = document.fvalida.mail.value 
  
  result = validarEmail(valor)
  if(result==false){
    document.fvalida.mail.focus()
    return 0;
  }

  function validarEmail() {
    var emailField = document.getElementById('mail');
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(emailField.value) ){
     alert("La dirección de email " + emailField.value + " es correcta.");
     return true;
    } else {
     alert("La dirección de email es incorrecta.");
     return false;
    }
  }

  //valido el interés
  if (document.getElementById('comment').value==0){
       alert("Debe ingresar su consulta.")
       document.fvalida.comment.focus()
       return 0;
  }

  const val = document.querySelector('form')

    const form = new FormData(val)
    const response = await fetch(val.action, {
        method: val.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
      val.reset()
      alert('Gracias por contactarnos, te responderemos a la brevedad')
  }

  //el formulario se envia
  /*alert("Muchas gracias por contactarnos, te responderemos a la brevedad");
  document.fvalida.submit(); */
}

function validarEntero(valor){
  //intento convertir a entero.
 //si era un entero no le afecta, si no lo era lo intenta convertir
 valor = parseInt(valor)

  //Compruebo si es un valor numérico
  if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
  }else{
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
  }
}

// Inicio: Validación de email

/*const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ' +email.minLength+ ' caracteres; ha introducido '+ email.value.length+'.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}
*/
// Fin: Validación de email