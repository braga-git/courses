import {Database} from './Database.js';
import {Course} from './entities/Course.js';
import {User} from './entities/User.js';

export class App {
    static #database = new Database

    createCourse(name, description, subject, price) {
        const course = new Course(name, description, subject, price)
        App.#database.saveCourse(course)
    }

    getCourses(){
        return App.#database.find('courses')
    }

    getACourse(courseName) {
        return App.#database.findCourseByName(courseName)
    }

    createUser(type, name, email, password, cpf, phone) {
        const user = new User(type, name, email, password, cpf, phone)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    getAUser(userEmail) {
        return App.#database.findUserByEmail(userEmail)
    }

    addUser(userId, courseName) {
        App.#database.addUserToCourse(userId, courseName)
    }

    getTeachers() {
        return App.#database.find('teachers')
    }

    createCourseSubject(newCourseSubject){
        App.#database.saveCourseSubject(newCourseSubject)
    }

    getCoursesSubjects(){
        return App.#database.find('coursesSubjects')
    }
}

