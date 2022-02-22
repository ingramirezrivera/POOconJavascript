class Comment {
    constructor ({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + " (" + this.stundetRole + ")");
        console.log(this.likes + " likes" );
        console.log(this.content);
    
    }
    
    publicarComentario(commentContent) {
        const comment = new Comment( {
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}


function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está prepoduciendo desde la url " + urlSecreta)
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta)
}

class PlatziClass {
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
}



class Course {
    constructor({
        name, classes = [], isFree = false, lang = "spanish",

    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programación básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombre;
        }
    }
}



const programacionBasica = new Course({
    name: "Curso gratis de programación básica",
    isFree: true,
})

programacionBasica.name = "Este es el nuevo nombre"


const cusroDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",

})

const cusroPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    lang: "english",
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
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}
class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos," + this.name + ", Solo puedes tomar cursos gratis");
        }

    }
}
class BasicStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos," + this.name + ", no puedes tomar cursos en ingles");
        }

    }
}
class ExpertStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
        
    }
}

class TeacherStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
        
    }
    publicarComentario(commentContent) {
        const comment = new Comment( {
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}


const fredy = new TeacherStudent({
    name: "Fredy Vega",
    username: "freddier",
    email: "fredier@platzi.com",
    instagram: "freddier",
    learningPaths: [
        escuelaWeb,
        escuelaJavas,
    ],
})

const juan = new FreeStudent({
    name: "Juan DC",
    username: "juanitoalimaña",
    email: "juanito@juanito.com",
    instagram: "instanito",
    learningPaths: [
        escuelaWeb,
        escuelaJavas,
    ],
})

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitonto",
    email: "migue@location.com",
    instagram: "instalito",
    learningPaths: [
        escuelaVgs,
        escuelaJavas,
    ],
})