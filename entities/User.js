export class User {
    constructor(type, name, email, password, cpf, phone) {
        this.id
        this.type = type
        this.name = name
        this.email = email
        this.password = password
        this.cpf = cpf
        this.phone = phone
        this.courses = []
    }

    addToCourses(course) {
        this.courses.push(course)
    }

    removeFromCourses(courseName){
        const updatedCourses = this.courses.filter(course => course.name !== courseName);
        this.courses = updatedCourses
    }
}
