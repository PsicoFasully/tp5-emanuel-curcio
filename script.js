
class Datos{

        constructor(nombre, apellido, mail){

            this.nombre = nombre
            this.apellido = apellido 
            this.mail= mail


        }


}

const datos = []

let nombre, apellido, mail

do{
    nombre = prompt("ingrese nombre ")
    apellido = prompt("ingrese apellido")
    mail = prompt ("ingrese mail")



}while(nombre.length == 0 || apellido.length == 0 || mail.length == 0)


const dato = new Datos(nombre, apellido, mail)
datos.push(dato)
console.log(dato)

let contenedor = document.createElement("div")
contenedor.innerHTML= `<p> Nombre: ${dato.nombre} </p>
                        <p> apellido: ${dato.apellido}</p>
                        <p> mail: ${dato.mail}</p>

`
document.body.appendChild(contenedor)

let titulo = document.getElementById("titulo")
titulo.innerText= "hola " + dato.nombre
console.log(titulo.innerText)