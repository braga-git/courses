import {User} from './entities/User.js';

module.exports = class Student extends User {
    constructor(name, email, password, cpf, phone) {
        super(name, email, password, cpf, phone)
        this.courses = []
    }

    addToCourses(course) {
        this.courses.push(course)
    }
}