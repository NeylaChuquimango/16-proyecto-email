//VARIABLES
//3 °-Se declara la variable para el boton de enviar
const btnEnviar = document.querySelector("#enviar");

//73°
const btnReset = document.querySelector("#resetBtn");

//25° -Creamos una constnate para insertar el mensaje
const formulario = document.querySelector("#enviar-mail");

// 7°-Creando variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

// 39°-VALIDANDO UN EMAIL DE MANERA PROFESIONAL con expresion regular
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//LISTENERS
//1°-Se agrega y llama la funcion de los eventos
eventListeners();
function eventListeners() {
  //2°-Se agrega un escuchador a document para cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp); //se dispara la funcion

  //8°-Se agrega un eventListener para cada campo del formulario
  //blur se usa cuando esté dentro de la caja de email y se salga
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //74°-REINICIA EL FORMULARIO A PARTIR DEL BOTON
  btnReset.addEventListener("click", resetearFormulario);

  //55°-ENVIAR EMAIL
  formulario.addEventListener("submit", enviarEmail);
}

//FUNCIONES
//4°-Se inicia la funcion de iniciarApp
function iniciarApp() {
  //5°-Se hace un clg para ver que funcione bien
  // console.log('iniciando...');

  //6°-Se inhabilita el boton de enviar
  btnEnviar.disabled = true;
  //el classList sirve para agregar clases, en este caso de telwin
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

//9°-Se agrega la funcion para validar el formulario
//11°-Se agrega un evento
function validarFormulario(evento) {
  //30°-Se hace un clg para saber que tipo de dato tiene caja caja de texto
  // console.log(evento.target.type);

  //10°-Se hace un clg para verificar que si esté funcionando
  // console.log('validando...');
  //12°-Se hace un clg con target, es una forma de acceder a lo que el usuario a escrito en el input
  // console.log(evento.target.value);
  //13°-Se hace un if para verificar si se a escrito algo o no
  if (evento.target.value.length > 0) {
    //14°-Se hace un clg para verificar
    // console.log("si hay algo");

    //46°-Eliminando los errores
    //seleccionar un slector parrafo qu econtenga una classList error
    const error = document.querySelector("p.error");
    //49° se rodea de un if para que no muestre error
    if (error) {
      //47°-Para remover el error
      error.remove();
    }

    //44°-Para colocar en verde si ya esta bien ingresado
    evento.target.classList.remove("border", "border-red-500");
    evento.target.classList.add("border", "border-green-500");
  } else {
    //15°-Se hace clg para verificar que no hay nada
    // console.log('no hay nada');
    // console.log(evento.target); //16°-Nos devuelve el elemento donde estamos teniendo contancto 'input'
    //17°-Para cambiar el color de la caja una vez que tengo contacto con ella y salgo
    //evento.target.style.borderColor = 'red';
    //45°-Para remover el color verde cuando no se agrega nada
    evento.target.classList.remove("border", "border-green-500");
    //18°-Otra manera de colocar borde
    evento.target.classList.add("border", "border-red-500");

    //19°- Llamamos a la funcion de mostarError para saber si hay error
    // mostrarError();
    //38°-Cuando el usuario no a llenado correctamente sus campos
    mostrarError("Todos los campos son obligatorios");
  }
  //31°-Se hace una comparacion para saber si es de tipo email
  if (evento.target.type === "email") {
    //32°-Se hace un clg para saber que si está funcionando
    // console.log('es email, hay que validar');

    //33°-Se crea una constante para saber si contiene un '@'
    // const resultado = evento.target.value.indexOf("@"); //indexOf busca en el string ingresado que haya al menos un @
    // console.log(resultado);

    //34°-if (resultado < 0) {
    //40°-UTILIZANDO LA EXPRESION REGULAR. el valor que se ingrese se va a validar
    if (er.test(evento.target.value)) {
      //48°-Si el email es correcto
      const error = document.querySelector("p.error");
      //49° se rodea de un if para validar
      if (error) {
        //48° para remover si hay error
        error.remove();
      }
      //41°-validando
      //mostrarError("El email no es valido");
      //42°-validando con un clg
      //console.log("email valido");
      //45°-Cuando si está ingresado correctamente
      evento.target.classList.remove("border", "border-red-500");
      evento.target.classList.add("border", "border-green-500");
    } else {
      //43°-En caso el imeail no esté bien
      evento.target.classList.remove("border", "border-green-500");
      evento.target.classList.add("border", "border-red-500");
      mostrarError("Email no valido");
      //35° - mostrarError();
    }
  }

  //50°-CUANDO YA SE VALIDA TODOS LOS CAMPOS
  //53° -El email se comprueba con la expresion regular
  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    //51°-Se hace un clg para verificar
    //console.log('pasaste la validacion..');

    //54°-Para habilitar el boton de enviar
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");

    //   }else{
    //52°-Se hace un clg para verificar
    //     console.log('hay campos por validar...');
  }
}

//20° CREA LA FUNCION PARA MOSTRAR ERROR
//36°-Se agrega un vento mensaje
function mostrarError(mensaje) {
  //21°-hacemos un clg para ver que esté funcionando bien
  // console.log('mostrando error...');
  //22°-Creamos un parrafo
  const mensajeError = document.createElement("p");
  //23°-mensajeError.textContent = "Todos los campos son obligatorios"; //para agregar un texto
  //37°-Para agregar un texto
  mensajeError.textContent = mensaje; 
  //24°-Creamos un classList con todos los atributos
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );
  //27°-Para verificar si hay algun elemento que tenga la clase de error
  const errores = document.querySelectorAll(".error");

  //28°-Hacemos un if para saber si l mensaje de error ya existe para no volver a mostralo otra vez
  if (errores.length === 0) {
    //length solo existe en querySelectorAll
    //26°-insertamos el mensaje de error en el formulario
    //Formulario.appendChild(mensajeError);

    //29°-Para que el mensaje de error se muestre al inicio
    //mostrar el mensaje de error en el formulario, antes del selector que contiene la classList mb-10
    formulario.insertBefore(mensajeError, document.querySelector(".mb-10"));
  }
}

//56°- funcion de enviar email
function enviarEmail(evento) {
  //58°-Se agrega un prevent para los errores
  evento.preventDefault();
  // 57°- Se hace un clg para verificar
  //console.log('Enviando correo...');

  //58°-Mostrar spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  //59°-Despues de 3 segundos ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    //setTineout se ejecuta una sola vez
    //60°-Se hace un clg para ver que desaparezac depues de 3 segundos
    // console.log('Esta función se ejecutará después de 3 seg');

    //64°-Para que el spinner desaparesca
    spinner.style.display = "none";

    //65°-Se crea una constate que contenga un mensaje que diga que se envio correctamenet
    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envió correctamante..!";
    //67°-Agregando clases de estilo para el mensaje
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase"
    );

    //66°-Inserta el parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner);

    //67°-Para que el mensaje de enviado con exito desaparzca
    setTimeout(() => {
      //68°-Para eliminar el mensaje de exito
      parrafo.remove();

      //70°-Se llama para que el formulario se resteee
      resetearFormulario();
    }, 4000);
    //61°- Se coloca el tiempo que va a tardar
    // cada segundo vale 1000
  }, 3000);

  //62°-Se va a ejecutar despues de 3 segundos varias veces
  // setInterval(() => {
  //63°-Se hace un clg para comprobar
  // console.log('Esta función se ejecutará después de 3 seg');

  // }, 3000);//tiempo que tarda
}

// 69° - FUNCION QUE RESETEA EL FORMULARIO
function resetearFormulario() {
  //71°
  formulario.reset();

  //72°-PARA RESETEAR EL BOTON
  iniciarApp();
}
