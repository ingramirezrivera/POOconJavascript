const natalia = {
    name: "Natalia",
    age: 20,
    status: "Sutdent",
    cusrsosAprobados: [
        "Curso DEfinitivo de HTML y CSS",
        "Curso Práctico de HTMLy CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cusrsosAprobados.push(nuevoCursito);
    }
    
};
 
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    "Curso de introducción a los videojuegos",
)