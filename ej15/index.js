let nombre = "Carol"
let apellido = "Peces"

const nameL = {nombre: nombre, apellido: apellido}

sessionStorage.setItem("nombre-completo", JSON.stringify(nameL))

localStorage.setItem("nom-completo", JSON.stringify(nameL))

// Cookie
// Convierto el objeto a string
const objetoString = JSON.stringify(nameL)

document.cookie = "nombreCompleto="+objetoString+";max-age=120;path=/"