function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está prepoduciendo desde la url " + urlSecreta)
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta)
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);

    }
}

class Classes {
    constructor({
        name
        }) {
        this.name = name;
}

const classeFutbol = new Classes ({
    name: "Clase de Futtobol orientado a objetos",
})


class Course {
    constructor ({
        name,
        classes = []
        }) {
        this._name = name;
        this.classes = classes;
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programación básica") {
            console.error("Web... no");
        }else{
        this._name = nuevoNombre;
        }
    }
}

const programacionBasica = new Course({
    name: "Curso gratis de programación básica",
})

programacionBasica.name = "Este es el nuevo nombre"


const cusroDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS"
})

const cusroPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS"
})

class LearningPath {
    constructor({
        name,
        courses = [],
        }) {
        this.name = name;
        this.courses = courses;
    }
}
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        programacionBasica,
        cusroDefinitivoHTML,
        cusroPracticoHTML,
        "Curso profesional de Grid Layout",
    ],
});
 const escuelaJavas = new LearningPath({
     name: "Esceuela de Javascript",
     courses: [
        programacionBasica,
         "Curso basico de Javascript",
         "Curso profesional de Javascript",
         "Curso de Ecmascript6+",
     ]
 });
const escuelaVgs = new LearningPath({
    name: "Escuela de Video Juegos",
    courses: [
        programacionBasica,
        cusroDefinitivoHTML,
        "Curso de animación en 3d",
        "Curso de dibujo en computador",
        "Curso de programación a la animación",
    ]
})


class Student {
    constructor ({
        name,
        username,
        email,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.isntagram = instagram;
        this.facebook = facebook;
        this.approvedCourses =approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const Daniel = new Student( {
    name: "Daniel",
})