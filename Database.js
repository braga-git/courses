export class Database {
    #storage = {
        courses: [],
        coursesSubjects: [],
        teachers: [],
        students: [],
        users: [],
        usersTypes: []
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
    
    saveCourseSubject(newCourseSubject){
        const courseSubjectExists = this.#storage.coursesSubjects.find(courseSubject => courseSubject === newCourseSubject)
        if (!courseSubjectExists) {
            this.#storage.coursesSubjects.push(newCourseSubject)
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

        this.#storage.users.forEach((user) => {
            const userId = this.#storage.users.indexOf(user)
            newUser.id = userId
        })
    }
    
    saveUserType(newUserType){
        const userTypeExists = this.#storage.usersTypes.find(userType => userType === newUserType)
        if (!userTypeExists) {
            this.#storage.usersTypes.push(newUserType)
        }
    }

    findUserById(userId) {
        return this.#storage.users.find(user => user.id === userId)
    }

    addUserToCourse(userId, courseName) {
        const user = this.findUserById(userId)
        const course = this.findCourseByName(courseName)

        if (user?.type === 'Teacher') {
            course?.addToTeachers(user)
            user?.addToCourses(course)
        } else {
            course?.addToStudents(user)
            user?.addToCourses(course)
        }
    }
}
