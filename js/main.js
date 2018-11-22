function manejarBotonInicio(){
  document.querySelector(".pantalla-inicio").classList.remove("d-none");
  document.querySelector(".pantalla-usuario").classList.add("d-none");
}


document.querySelector(".botonInicio").addEventListener("click",manejarBotonInicio);


		
function saludoUsuario() {
  var usuario=document.querySelector("#in1").value;
  document.querySelector("#saludar").textContent="Hola "+usuario+"!Nos alegra que hayas ingresado a nuestro juego";
  document.querySelector(".navbar").classList.remove("d-none");
  document.querySelector(".pantalla-inicio").classList.remove("d-none");
  document.querySelector(".pantalla-usuario").classList.add("d-none");
  document.querySelector(".nombre-user").textContent=usuario;

}

document.querySelector("#boton1").addEventListener("click",saludoUsuario);








