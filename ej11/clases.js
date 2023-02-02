class Estudiante {
    nombre
    asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nom){
        this.nombre = nom
    }

    obtenDatos(){
        return {nombre: this.nombre, asignaturas: this.asignaturas}
    }
}

const est = new Estudiante("lele")

console.log(est.obtenDatos())