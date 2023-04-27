import {App} from './App.js';

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

console.log(app.getTeachers())


const list = document.querySelector('.list')
const courses = app.getCourses()

courses.forEach((course) => {
    const courseCard = document.createElement('div')
    courseCard.className = "courseCard"
    
    const courseName = document.createElement('p')
    courseName.textContent = course.name
    courseName.className = "courseName"
    
    const courseDescription = document.createElement('p')
    courseDescription.textContent = course.description
    courseDescription.className = "courseDescription"
    
    const courseSubject = document.createElement('p')
    courseSubject.textContent = course.subject
    courseSubject.className = "courseSubject"
    
    const coursePrice = document.createElement('p')
    coursePrice.textContent = `R$${course.price}`
    coursePrice.className = "coursePrice"
    
    courseCard.append(courseSubject, courseName, courseDescription, coursePrice)
    list.appendChild(courseCard)
})

function createLabel(id, textContent){
    const label = document.createElement('label')
    label.id = id
    label.textContent = textContent
    return label
}

function createInput(id, type){
    const input = document.createElement('input')
    input.id = id
    input.type = type
    return input
}

function createSelectList(array){
    const selectList = document.createElement('select')
    array.forEach((subject) => {
        const option = document.createElement('option')
        option.value = subject
        option.text = subject
        selectList.appendChild(option)
    })
    return selectList
}


const createCourseBtn = document.getElementById('createCourseBtn')
createCourseBtn.addEventListener('click', () => {
    createCourseBtn.disabled = true

    const courseCardList = document.querySelectorAll('.courseCard')
    courseCardList.forEach((courseCard) => {
        courseCard.style.display = 'none'
    })

    const courseNameLabel = createLabel("courseNameLabel", "Enter the course name")
    const courseNameInput = createInput("courseNameInput", "text")
    
    const courseDescriptionLabel = createLabel("courseDescriptionLabel", "Enter the course description")
    const courseDescriptionInput = createInput("courseDescriptionInput", "text")
    
    const courseSubjectLabel = createLabel("courseDescriptionLabel", "Select the course subject")
    const coursesSubjects = createSelectList(app.getCoursesSubjects())

    const coursePriceLabel = createLabel("coursePriceLabel", "Enter the course price")
    const coursePriceInput = createInput("coursePriceInput", "number")

    const courseTeachersLabel = createLabel("courseTeachersLabel", "Select the teachers for the course")
    const teachers = []
    app.getTeachers().forEach((object) => {
        const teacherName = object.name
        teachers.push(teacherName)
    })

    const courseTeachers = createSelectList(teachers)

    list.append(courseNameLabel, courseNameInput, courseDescriptionLabel, courseDescriptionInput, courseSubjectLabel, coursesSubjects, coursePriceLabel, coursePriceInput, courseTeachersLabel, courseTeachers)

    
})