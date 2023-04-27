export class Course {
    constructor(name, description, subject, price) {
        this.name = name
        this.description = description
        this.subject = subject
        this.price = price
        this.students = []
        this.teachers = []
    }

    addToTeachers(user) {
        this.teachers.push(user)
    }

    addToStudents(user) {
        this.students.push(user)
    }

}
