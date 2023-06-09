import { App } from './App.js';

const app = new App()

app.createCourseSubject("OAB 1ª Fase")
app.createCourseSubject("OAB 2ª Fase")
app.createCourseSubject("Concursos")
app.createCourseSubject("Prática e atualização")
app.createCourseSubject("Plano OAB")
app.createUserType("Teacher")
app.createUserType("Student")
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

let courses = app.getCourses()
let users = app.getUsers()
let userIdSelected

const coursesSubjects = app.getCoursesSubjects()
const usersTypes = app.getUsersTypes()

const logo = document.getElementById('logo')
const display = document.getElementById('display')
const welcomeMessage = document.getElementById('welcomeMessage')

const coursesListBtn = document.getElementById('coursesListBtn')
const coursesArea = document.getElementById('coursesArea')
const coursesList = document.getElementById('coursesList')
const createCourseBtn = document.getElementById('createCourseBtn')
const createCourseForm = document.getElementById('createCourseForm')
const courseNameInput = document.getElementById('courseNameInput')
const courseDescriptionTextarea = document.getElementById('courseDescriptionTextarea')
const courseSubjectSelect = document.getElementById('courseSubjectSelect')
const coursePriceInput = document.getElementById('coursePriceInput')
const courseTeachersSelect = document.getElementById('courseTeachersSelect')
const createCourseConfirmation = document.getElementById('createCourseConfirmation')

const usersListBtn = document.getElementById('usersListBtn')
const usersArea = document.getElementById('usersArea')
const usersList = document.getElementById('usersList')
const createUserBtn = document.getElementById('createUserBtn')
const createUserForm = document.getElementById('createUserForm')
const createUserTypeSelect = document.getElementById('createUserTypeSelect')
const createUserNameInput = document.getElementById('createUserNameInput')
const createUserEmailInput = document.getElementById('createUserEmailInput')
const createUserPasswordInput = document.getElementById('createUserPasswordInput')
const createUserCPFInput = document.getElementById('createUserCPFInput')
const createUserPhoneInput = document.getElementById('createUserPhoneInput')
const createUserConfirmation = document.getElementById('createUserConfirmation')

const editUserArea = document.getElementById('editUserArea')
const editUserForm = document.getElementById('editUserForm')
const editUserTypeSelect = document.getElementById('editUserTypeSelect')
const editUserNameInput = document.getElementById('editUserNameInput')
const editUserEmailInput = document.getElementById('editUserEmailInput')
const editUserPasswordInput = document.getElementById('editUserPasswordInput')
const editUserCPFInput = document.getElementById('editUserCPFInput')
const editUserPhoneInput = document.getElementById('editUserPhoneInput')
const userCoursesList = document.getElementById('userCoursesList')

function showDisplayContent(element, displayStyle){
    for (let i = 0; i < display.children.length; i++) {
        const child = display.children[i];
        if (child === element) {
            child.style.display = displayStyle;
        } else {
            child.style.display = "none";
        }
    }
}
function createCardButton(classList){
    const btn = document.createElement('button')
    const buttonIcon = document.createElement('i')
    btn.classList = classList
    btn.appendChild(buttonIcon)
    return btn
}
function createCardParagraphAndAppendClassName(className, textContent) {
    const paragraph = document.createElement('p')
    paragraph.className = className
    paragraph.textContent = textContent
    return paragraph
}
function createUserCardInfoDiv(titleContent, infoClass, infoContent){
    const div = document.createElement('div')
    div.classList = "userCardInfoDiv"
    const title = document.createElement('p')
    title.classList = "userCardInfoTitle"
    title.textContent = titleContent
    const paragraph = document.createElement('p')
    paragraph.classList = infoClass
    paragraph.textContent = infoContent

    div.append(title, paragraph)
    return div
}
function appendOptionToSelectList(array, select) {
    while (select.lastChild) {
        select.removeChild(select.lastChild);
    }

    array.forEach((subject) => {
        const option = document.createElement('option')
        option.value = subject
        option.text = subject
        select.appendChild(option)
    })
}
function appendUsersToSelectList(selectList, userType) {
    while (selectList.lastChild) {
        selectList.removeChild(selectList.lastChild);
    }

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
function validateUserName() {
    let valid = false
    const namePattern = /^[a-zA-ZÀ-ÿ\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+([a-zA-ZÀ-ÿ\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF'\s-])*[a-zA-ZÀ-ÿ\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]$/

    const userName = createUserNameInput.value.trim()

    if (userName === '') {
        setError(createUserNameInput, 'Cannot be blank!')
    } else if(!namePattern.test(userName)){
        setError(createUserNameInput, 'Name is not valid!')
    } else {
        setSuccess(createUserNameInput)
        valid = true
    }

    return valid
}
function validateUserEmail(){
    let valid = false
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const userEmail = createUserEmailInput.value.trim()

    if (userEmail === '') {
        setError(createUserEmailInput, 'Cannot be blank!')
    } else if(!emailPattern.test(userEmail)){
        setError(createUserEmailInput, 'Email is not valid!')
    } else {
        setSuccess(createUserEmailInput)
        valid = true
    }

    return valid
}
function validateUserPassword() {
    let valid = false
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    const userPassword = createUserPasswordInput.value.trim()

    if (userPassword === '') {
        setError(createUserPasswordInput, 'Cannot be blank!')
    } else if(!passwordPattern.test(userPassword)){
        setError(createUserPasswordInput, 'Password is not valid!')
    } else {
        setSuccess(createUserPasswordInput)
        valid = true
    }

    return valid
}
function validateUserCPF(){
    let valid = false
    const CPFPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    
    const userCPF = createUserCPFInput.value.trim()

    if (userCPF === '') {
        setError(createUserCPFInput, 'Cannot be blank!')
    } else if(!CPFPattern.test(userCPF)){
        setError(createUserCPFInput, 'CPF is not valid!')
    } else {
        setSuccess(createUserCPFInput)
        valid = true
    }

    return valid
}
function validateUserPhone(){
    let valid = false
    const PhonePattern = /^(\+55)?\s*(\()?(\d{2})?(\))?\s*([9])?\s*(\d{4})[-.\s]?(\d{4})$/

    const userPhone = createUserPhoneInput.value

    if (userPhone === '') {
        setError(createUserPhoneInput, 'Cannot be blank!')
    } else if(!PhonePattern.test(userPhone)){
        setError(createUserPhoneInput, 'Phone is not valid!')
    } else {
        setSuccess(createUserPhoneInput)
        valid = true
    }

    return valid
}
function validateInputs() {
    let isCourseNameValid = validateCourseName()
    let isCourseDescriptionValid = validateCourseDescription()
    let isCoursePriceValid = validateCoursePrice()

    let isUserNameValid = validateUserName()
    let isUserEmailValid = validateUserEmail()
    let isUserPasswordValid = validateUserPassword()
    let isUserCPFValid = validateUserCPF()
    let isUserPhoneValid =  validateUserPhone()

    let isCourseFormValid = isCourseNameValid && isCourseDescriptionValid && isCoursePriceValid
    let isUserFormValid = isUserNameValid && isUserEmailValid && isUserPasswordValid && isUserCPFValid && isUserPhoneValid

    return isCourseFormValid || isUserFormValid
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
    welcomeMessage.style.display = "flex";
    display.style.overflowY = "none";

    const displayChildren = display.children;

    for (const child of displayChildren) {
        if (child !== welcomeMessage) {
            child.style.display = "none";
        }
    }
})

coursesListBtn.addEventListener('click', () => {
    while (coursesList.lastChild) {
        coursesList.removeChild(coursesList.lastChild);
    }

    courses.forEach((course) => {
        const courseCard = document.createElement('div')
        courseCard.classList = "card courseCard"
        
        const cardBtnsContainer = document.createElement('div')
        cardBtnsContainer.className = "cardBtnsContainer"

        const editCourseBtn = createCardButton("editCardBtn fa-sharp fa-solid fa-pen-to-square fa-2xs")
        const deleteCourseBtn = createCardButton("deleteCardBtn fa-regular fa-trash fa-2xs")
        cardBtnsContainer.append(editCourseBtn, deleteCourseBtn)

        const courseName = createCardParagraphAndAppendClassName("courseName", course.name)
        const courseDescription = createCardParagraphAndAppendClassName("courseDescription", course.description)
        const courseSubject = createCardParagraphAndAppendClassName("courseSubject", course.subject)
        const coursePrice = createCardParagraphAndAppendClassName("coursePrice", `R$${course.price}`)

        courseCard.append(courseSubject, cardBtnsContainer, courseName, courseDescription, coursePrice)
        coursesList.appendChild(courseCard)

        deleteCourseBtn.addEventListener('click', () => {
            app.deleteCourse(course.id)
            courses = app.getCourses()
            coursesList.removeChild(courseCard)
        })
    })

    showDisplayContent(coursesArea, "block")
    display.style.overflowY = "scroll"
})
createCourseBtn.addEventListener('click', () => {
    showDisplayContent(createCourseForm, "flex")
    display.style.overflowY = "scroll"

    appendOptionToSelectList(coursesSubjects, courseSubjectSelect)
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
        userCard.className = "card userCard"
        
        const cardBtnsContainer = document.createElement('div')
        cardBtnsContainer.className = "cardBtnsContainer"
        
        const editUserBtn = createCardButton("editCardBtn fa-sharp fa-solid fa-pen-to-square fa-2xs")
        const deleteUserBtn = createCardButton("deleteCardBtn fa-regular fa-trash fa-2xs")
        cardBtnsContainer.append(editUserBtn, deleteUserBtn)
        
        const userType = createUserCardInfoDiv("Type", "userType", user.type)
        const userName = createUserCardInfoDiv("Name", "userName", user.name)
        const userEmail = createUserCardInfoDiv("Email", "userEmail", user.email)
        const userCPF = createUserCardInfoDiv("CPF", "userCPF", user.cpf)
        const userPhone = createUserCardInfoDiv("Phone", "userPhone", user.phone)

        userCard.append(userType, cardBtnsContainer, userName, userCPF, userEmail, userPhone)
        usersList.appendChild(userCard)
        
        deleteUserBtn.addEventListener('click', () => {
            app.deleteUser(user.id)
            users = app.getUsers()
            usersList.removeChild(userCard)
        })
        
        editUserBtn.addEventListener('click', () => {
            while (userCoursesList.lastChild) {
                userCoursesList.removeChild(userCoursesList.lastChild);
            }

            showDisplayContent(editUserArea, "grid")
            appendOptionToSelectList(usersTypes, editUserTypeSelect)
            
            userIdSelected = user.id
            editUserTypeSelect.value = user.type
            editUserNameInput.value = user.name
            editUserEmailInput.value  = user.email
            editUserPasswordInput.value = user.password
            editUserCPFInput.value = user.cpf
            editUserPhoneInput.value = user.phone
            let userCourses = user.courses
            
            userCourses.forEach((course) => {
                const courseCard = document.createElement('div')
                courseCard.classList = "card courseCard"
                
                const cardBtnsContainer = document.createElement('div')
                cardBtnsContainer.className = "cardBtnsContainer"

                const deleteCourseBtn = createCardButton("deleteCardBtn fa-regular fa-trash fa-2xs")
                cardBtnsContainer.append(deleteCourseBtn)

                const courseName = createCardParagraphAndAppendClassName("courseName", course.name)
                const courseDescription = createCardParagraphAndAppendClassName("courseDescription", course.description)
                const courseSubject = createCardParagraphAndAppendClassName("courseSubject", course.subject)
                const coursePrice = createCardParagraphAndAppendClassName("coursePrice", `R$${course.price}`)

                courseCard.append(courseSubject, cardBtnsContainer, courseName, courseDescription, coursePrice)
                userCoursesList.appendChild(courseCard)

                deleteCourseBtn.addEventListener('click', () => {
                    app.removeUser(userIdSelected, course.name)
                    userCourses = user.courses
                    userCoursesList.removeChild(courseCard)
                })
            })            
        })
    })
    showDisplayContent(usersArea, "block")
    display.style.overflowY = "scroll"
})
createUserBtn.addEventListener('click', () => {
    showDisplayContent(createUserForm, "flex")
    display.style.overflowY = "scroll"

    appendOptionToSelectList(usersTypes, createUserTypeSelect)
})
createUserForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userType = createUserTypeSelect.value
    const userName = createUserNameInput.value
    const userEmail = createUserEmailInput.value
    const userPassword = createUserPasswordInput.value
    const userCPF = createUserCPFInput.value
    const userPhone = createUserPhoneInput.value

    if(validateInputs()){
        app.createUser(userType, userName, userEmail, userPassword, userCPF, userPhone)

        createUserForm.style.display = "none"
        createUserConfirmation.style.display = "flex"
        display.style.overflowY = "none"
    }
})
createUserForm.addEventListener('input', debouce((event) => {
    switch (event.target.className) {
        case 'userNameInput':
            validateUserName()
            break
        case 'userEmailInput':
            validateUserEmail()
            break
        case 'userPasswordInput':
            validateUserPassword()
            break
        case 'userCPFInput':
            validateUserCPF()
            break
        case 'userPhoneInput':
            validateUserPhone()
            break
    }
}))

editUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const userType = editUserTypeSelect.value
    const userName = editUserNameInput.value
    const userEmail = editUserEmailInput.value
    const userPassword = editUserPasswordInput.value
    const userCPF = editUserCPFInput.value
    const userPhone = editUserPhoneInput.value

    app.editUser(userIdSelected, userType, userName, userEmail, userPassword, userCPF, userPhone)
})