class Student2 {
    constructor ( {
        name,
        age,
        facebook,
        twitter,
        instagram,
        cursosAprobados = [],
        email,
        }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
    aprobarCurso (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguel@miguel.com",
});