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
            newCourse.id = this.#storage.courses.length
            this.#storage.courses.push(newCourse)
        }
    }

    saveCourseSubject(newCourseSubject) {
        const courseSubjectExists = this.#storage.coursesSubjects.find(courseSubject => courseSubject === newCourseSubject)
        if (!courseSubjectExists) {
            this.#storage.coursesSubjects.push(newCourseSubject)
        }
    }

    findCourseByName(courseName) {
        return this.#storage.courses.find(course => course.name === courseName)
    }

    removeCourseFromDatabase(courseId) {
        const courses = this.#storage.courses;
        const updatedCourses = courses.filter(course => course.id !== courseId);
        this.#storage.courses = updatedCourses
    }

    saveNewUser(newUser) {
        const userExists = this.#storage.users.find(user => user.cpf === newUser.cpf)

        if (!userExists && newUser.type === 'Teacher') {
            this.#storage.users.push(newUser)
            this.#storage.teachers.push(newUser)
            newUser.id = this.#storage.users.length
        } else {
            this.#storage.users.push(newUser)
            this.#storage.students.push(newUser)
            newUser.id = this.#storage.users.length
        }
    }

    saveUserChanges(userId, newType, newName, newEmail, newPassword, newCpf, newPhone) {
        const user = this.findUserById(userId)

        // if (user.type !== newType) {
        //     user.type = newType
        // }
        if (user?.name !== newName) {
            user.name = newName
        }
        // if (user.email !== newEmail) {
        //     user.email = newEmail
        // }
        // if (user.password !== newPassword) {
        //     user.password = newPassword
        // }
        // if (user.cpf !== newCpf) {
        //     user.cpf = newCpf
        // }
        // if (user.phone !== newPhone) {
        //     user.phone = newPhone
        // }
        
        console.log(user)
    }

    saveUserType(newUserType) {
        const userTypeExists = this.#storage.usersTypes.find(userType => userType === newUserType)
        if (!userTypeExists) {
            this.#storage.usersTypes.push(newUserType)
        }
    }

    findUserById(userId) {
        return this.#storage.users.find(user => user.id === userId)
    }

    removeUserFromDatabase(userId) {
        const users = this.#storage.users;
        const updatedUsers = users.filter(user => user.id !== userId);
        this.#storage.users = updatedUsers
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
