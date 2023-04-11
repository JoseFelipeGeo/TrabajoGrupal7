  // la Validación del Formulario irá aquí
  function validarc(){

    let nombre,correo,mensaje;
    nombre=document.getElementById("usuario").value;
    email=document.getElementById("email").value;
    mensaje=document.getElementById("mensaje").value;

    if(nombre === "")   
{
   alert("El campo del nombre esta vacío"); 
    document.getElementById("usuario").focus();
    return false;
    }else if(email=== ""){
     alert("El campo del correo esta vacío"); 
     document.getElementById("email").focus();
    return false;
                }else if(mensaje=== ""){
     alert("El campo del mensaje esta vacío"); 
     document.getElementById("mensaje").focus();
    return false;
                }
}
