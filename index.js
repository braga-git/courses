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


const coursesListBtn = document.getElementById('coursesListBtn')
const usersListBtn = document.getElementById('usersListBtn')
const display = document.getElementById('display')
const welcomeMessage = document.getElementById('welcomeMessage')
const coursesArea = document.getElementById('coursesArea')
const createCourseBtn = document.getElementById('createCourseBtn')
const coursesList = document.getElementById('coursesList')
const createCourseForm = document.getElementById('createCourseForm')
const courseNameInput = document.getElementById('courseNameInput').value
const courseDescriptionTextarea = document.getElementById('courseDescriptionTextarea').value
const courseSubjectSelect = document.getElementById('courseSubjectSelect')
const coursePriceInput = document.getElementById('coursePriceInput').value
const courseTeachersSelect = document.getElementById('courseTeachersSelect')
const createCourseSubmitBtn = document.getElementById('createCourseSubmitBtn')
const teachers = []


function createCourseCardParagraph(className, textContent){
    const paragraph = document.createElement('p')
    paragraph.className = className
    paragraph.textContent = textContent
    return paragraph
}
function appendOptionToSelectList(array, select){
    array.forEach((value) => {
        const option = document.createElement('option')
        option.value = value
        option.text = value
        select.appendChild(option)
    })
}


app.getCourses().forEach((course) => {
    const courseCard = document.createElement('div')
    courseCard.className = "courseCard"
    
    const courseName = createCourseCardParagraph("courseName", course.name)
    const courseDescription = createCourseCardParagraph("courseDescription", course.description) 
    const courseSubject = createCourseCardParagraph("courseSubject", course.subject)
    const coursePrice = createCourseCardParagraph("coursePrice", `R$${course.price}`)

    courseCard.append(courseSubject, courseName, courseDescription, coursePrice)
    coursesList.appendChild(courseCard)
})
app.getTeachers().forEach((teacher) => {
    const teacherName = teacher.name
    teachers.push(teacherName)
})
appendOptionToSelectList(teachers, courseTeachersSelect)
appendOptionToSelectList(app.getCoursesSubjects(), courseSubjectSelect)


coursesListBtn.addEventListener('click', () => {
    welcomeMessage.style.display = "none"
    coursesArea.style.display = "block"
    display.style.overflowY = "scroll"

    if(createCourseForm.style.display = "flex"){
        createCourseForm.style.display = "none"
    }
})

createCourseBtn.addEventListener('click', () => {
    coursesArea.style.display = "none"
    createCourseForm.style.display = "flex"
})


createCourseSubmitBtn.onsubmit = () => {
    const courseName = courseNameInput
    const courseDescription = courseDescriptionTextarea
    const courseSubject = courseSubjectSelect
    const coursePrice = coursePriceInput
    app.createCourse(courseName, courseDescription, courseSubject, coursePrice)
    return console.log(app.getCourses())
}