export class Database {
    #storage = {
        courses: [],
        coursesSubjects: [],
        teachers: [],
        students: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveCourse(newCourse) {
        const courseExists = this.#storage.courses.find(course => course.name === newCourse.name)
        if (!courseExists) {
            this.#storage.courses.push(newCourse)
        }
    }

    findCourseByName(courseName) {
        return this.#storage.courses.find(course => course.name === courseName)
    }

    saveUser(newUser) {
        const userExists = this.#storage.users.find(user => user.email === newUser)
        if (!userExists && newUser.type === 'Teacher') {
            this.#storage.users.push(newUser)
            this.#storage.teachers.push(newUser)
        } else {
            this.#storage.users.push(newUser)
            this.#storage.students.push(newUser)
        }
    }

    findUserByEmail(userEmail) {
        return this.#storage.users.find(user => user.email === userEmail)
    }

    addUserToCourse(userEmail, courseName) {
        const user = this.findUserByEmail(userEmail)
        const userType = user.type
        const course = this.findCourseByName(courseName)

        if (userType === 'Teacher') {
            course?.addToTeachers(user)
            user?.addToCourses(course)
        } else {
            course?.addToStudents(user)
            user?.addToCourses(course)
        }
    }

    saveCourseSubject(newCourseSubject){
        const courseSubjectExists = this.#storage.coursesSubjects.find(courseSubject => courseSubject === newCourseSubject)
        if (!courseSubjectExists) {
            this.#storage.coursesSubjects.push(newCourseSubject)
        }
    }
}
