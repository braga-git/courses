import { App } from './App.js';

const app = new App()

app.createCourse("Curso OAB 1ª fase 38º Exame - Intensivo Turbo Ao Vivo", "Preparação completa e eficaz para aprovação na 1ª fase do exame da OAB, com destaque nas principais disciplinas.", "OAB 1ª Fase", 589.65)
app.createCourse("Curso OAB 2ª Fase Trabalho 37º Exame", "Preparatório completo com metodologia prática e professores altamente qualificados para a aprovação na 2ª fase do exame da OAB na área de Direito do Trabalho, edição 37.", "OAB 2ª Fase", 652.54)
app.createCourse("Carreiras Tribunais | Analista Judiciário - Área Judiciária", "Preparatório para Analista Judiciário - Área Judiciária de Tribunais com metodologia prática e enfoque em conteúdos específicos para aprovação em concursos.", "Concursos", 1243.32)
app.createCourse("Advocacia Trabalhista e Compliance", "Curso especializado em Advocacia Trabalhista e Compliance, com enfoque na prática e atualização profissional para a área.", "Prática e atualização", 543.76)
app.createCourse("Plano OAB 3.0 38º Exame", "Curso completo para aprovação nas 1ª e 2ª fases do exame da OAB, com metodologia prática e professores especializados.", "Plano OAB", 1352.65)

app.createUser("Teacher", "Nidal", "nidal@courses.com.br", "penalnaveia", "213.321.340-02", "(51) 9 9534-2234")
app.createUser("Teacher", "Cleize", "cleize@courses.com.br", "trabalhonaveia", "324.132.543-41", "(51) 9 9534-2544")
app.createUser("Teacher", "Fetter", "fetter@courses.com.br", "civilnaveia", "865.657.765-32", "(51) 9 9534-2655")
app.createUser("Teacher", "Douglas", "douglas@courses.com.br", "filosofianaveia", "342.456.987-65", "(51) 9 9534-2677")
app.createUser("Teacher", "Matheus", "matheus@courses.com.br", "ambientalnaveia", "436.123.321-76", "(51) 9 9534-2987")

app.createUser("Student", "Luiza", "luiza@cap.com", "senhamestra123", "123.435.443-43", "(51) 9 9214-3214")

app.createCourseSubject("OAB 1ª Fase")
app.createCourseSubject("OAB 2ª Fase")
app.createCourseSubject("Concursos")
app.createCourseSubject("Prática e atualização")
app.createCourseSubject("Plano OAB")


const courses = app.getCourses()
const users = app.getUsers()
const coursesSubjects = app.getCoursesSubjects()
const logo = document.getElementById('logo')
const display = document.getElementById('display')
const welcomeMessage = document.getElementById('welcomeMessage')
const coursesListBtn = document.getElementById('coursesListBtn')
const createCourseConfirmation = document.getElementById('createCourseConfirmation')
const coursesArea = document.getElementById('coursesArea')
const createCourseBtn = document.getElementById('createCourseBtn')
const coursesList = document.getElementById('coursesList')
const usersListBtn = document.getElementById('usersListBtn')
const usersList = document.getElementById('usersList')

const createCourseForm = document.getElementById('createCourseForm')
const courseNameInput = document.getElementById('courseNameInput')
const courseDescriptionTextarea = document.getElementById('courseDescriptionTextarea')
const courseSubjectSelect = document.getElementById('courseSubjectSelect')
const coursePriceInput = document.getElementById('coursePriceInput')
const courseTeachersSelect = document.getElementById('courseTeachersSelect')


function createCardParagraphAndAppendClassName(className, textContent) {
    const paragraph = document.createElement('p')
    paragraph.className = className
    paragraph.textContent = textContent
    return paragraph
}
function appendSubjectsToSelectList() {
    coursesSubjects.forEach((subject) => {
        const option = document.createElement('option')
        option.value = subject
        option.text = subject
        courseSubjectSelect.appendChild(option)
    })
}
function appendUsersToSelectList(selectList, userType) {
    users.forEach((user) => {
        if (user.type === userType) {
            const option = document.createElement('option')
            option.value = user.name
            option.text = user.name
            option.id = user.id
            selectList.appendChild(option)
        }
    })
}
function addUsersToCourse(selectList, courseName) {
    const selectedOptions = selectList.selectedOptions
    const selectedIds = []
    for (let i = 0; i < selectedOptions.length; i++) {
        selectedIds.push(selectedOptions[i].id)
    }
    selectedIds.forEach((userId) => {
        app.addUser(Number(userId), courseName)
    });
}
function courseExists(courses, courseName) {
    return courses.find(course => course.name == courseName)
}
function setError(element, message) {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
function setSuccess(element) {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
function validateCourseName() {
    let valid = false

    const courseName = courseNameInput.value.trim()

    if (courseName === '') {
        setError(courseNameInput, 'Cannot be blank!')
    } else {
        setSuccess(courseNameInput)
        valid = true
    }

    return valid
}
function validateCourseDescription() {
    let valid = false

    const courseDescription = courseDescriptionTextarea.value.trim()

    if (courseDescription === '') {
        setError(courseDescriptionTextarea, 'Cannot be blank!')
    } else {
        setSuccess(courseDescriptionTextarea)
        valid = true
    }

    return valid
}
function validateCoursePrice() {
    let valid = false

    const coursePrice = coursePriceInput.value

    if (coursePrice === '' || coursePrice <= 0) {
        setError(coursePriceInput, 'Must be a positive number!')
    } else {
        setSuccess(coursePriceInput)
        valid = true
    }

    return valid
}
function validateInputs() {
    let isCourseNameValid = validateCourseName()
    let isCourseDescriptionValid = validateCourseDescription()
    let isCoursePriceValid = validateCoursePrice()

    let isFormValid = isCourseNameValid && isCourseDescriptionValid && isCoursePriceValid

    return isFormValid
}
function debouce(fn, delay = 500) {
    let timeoutId
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

logo.addEventListener('click', () => {
    welcomeMessage.style.display = "flex"
    display.style.overflowY = "none"

    if (coursesArea.style.display = "block") {
        coursesArea.style.display = "none"
    }

    if (createCourseForm.style.display = "flex") {
        createCourseForm.style.display = "none"
    }
})
coursesListBtn.addEventListener('click', () => {
    while (coursesList.lastChild) {
        coursesList.removeChild(coursesList.lastChild);
    }

    courses.forEach((course) => {
        const courseCard = document.createElement('div')
        courseCard.className = "courseCard"

        const courseName = createCardParagraphAndAppendClassName("courseName", course.name)
        const courseDescription = createCardParagraphAndAppendClassName("courseDescription", course.description)
        const courseSubject = createCardParagraphAndAppendClassName("courseSubject", course.subject)
        const coursePrice = createCardParagraphAndAppendClassName("coursePrice", `R$${course.price}`)

        courseCard.append(courseSubject, courseName, courseDescription, coursePrice)
        coursesList.appendChild(courseCard)
    })

    welcomeMessage.style.display = "none"
    coursesArea.style.display = "block"
    display.style.overflowY = "scroll"

    if (createCourseForm.style.display = "flex") {
        createCourseForm.style.display = "none"
    }
    if (createCourseConfirmation.style.display = "flex") {
        createCourseConfirmation.style.display = "none"
    }
})
createCourseBtn.addEventListener('click', () => {
    coursesArea.style.display = "none"
    createCourseForm.style.display = "flex"

    appendSubjectsToSelectList()
    appendUsersToSelectList(courseTeachersSelect, 'Teacher')
})
createCourseForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const courseName = document.getElementById('courseNameInput').value
    const courseDescription = document.getElementById('courseDescriptionTextarea').value
    const courseSubject = document.getElementById('courseSubjectSelect').value
    const coursePrice = document.getElementById('coursePriceInput').value

    if (validateInputs()) {
        app.createCourse(courseName, courseDescription, courseSubject, coursePrice)

        createCourseForm.style.display = "none"
        createCourseConfirmation.style.display = "flex"
        display.style.overflowY = "none"
    }

    addUsersToCourse(courseTeachersSelect, courseName)
})
createCourseForm.addEventListener('input', debouce((event) => {
    switch (event.target.id) {
        case 'courseNameInput':
            validateCourseName()
            break
        case 'courseDescriptionTextarea':
            validateCourseDescription()
            break
        case 'coursePriceInput':
            validateCoursePrice()
            break
    }
}))
usersListBtn.addEventListener('click', () => {
    while (usersList.lastChild) {
        usersList.removeChild(usersList.lastChild);
    }

    users.forEach((user) => {
        const userCard = document.createElement('div')
        userCard.className = "card"

        const userType = createCardParagraphAndAppendClassName("userType", user.type)
        const userName = createCardParagraphAndAppendClassName("userName", user.name)
        const userEmail = createCardParagraphAndAppendClassName("userEmail", user.email)
        const userCPF = createCardParagraphAndAppendClassName("userCPF", user.cpf)
        const userPhone = createCardParagraphAndAppendClassName("userPhone", user.phone)

        userCard.append(userType, userName, userEmail, userCPF, userPhone)
        usersList.appendChild(userCard)

        welcomeMessage.style.display = "none"
        usersArea.style.display = "block"
        display.style.overflowY = "scroll"
    })
})