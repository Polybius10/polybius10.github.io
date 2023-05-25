const nav = document.querySelector('#nav');
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const lenguaje = document.querySelector("#language")
const menuLenguaje = document.querySelector("#language-menu")
const proyectsTable = document.getElementById('proyectsTable')
const proyectTitle = document.getElementById('proyectTitle')
const openFile = document.querySelector('#openFile')
const fileTitle = document.getElementById('fileTitle')
const minimize = document.getElementById('minimize')
const exitFile = document.getElementById('exitFile')
const fileDescription = document.getElementById('fileDescription')
const toolsUsed = document.getElementById('toolsUsed')
const openProyect = document.querySelector('#openProyect')
const weatherApp = document.getElementById('weatherApp')
const calculator = document.getElementById('calculator')
const batatabit= document.getElementById('Batatabit')
const yardsale= document.getElementById('YardSale')
const API = document.getElementById('API')
const fileIcon = document.getElementById('fileIcon')
let imagen = document.createElement('img')


// Proyectos

const close = _ => openFile.classList.remove('enable')
 
minimize.addEventListener('click', close)
exitFile.addEventListener('click', close)

weatherApp.addEventListener('click', () => {
    openFile.classList.toggle('enable'); 
    fileTitle.innerText = "weatherApp";
    fileDescription.innerText = "Aplicación del clima creada experimental...";
    toolsUsed.innerText = "HTML, CSS, JavaScript, WeatherAPI"  
    imagen.src = './icons/weatherIcon.jpg'
    fileIcon.appendChild(imagen)
    imagen.classList.add('file-icon')
})

batatabit.addEventListener('click', () => {
    openFile.classList.toggle('enable'); 
    fileTitle.innerText = "Batatabit";
    fileDescription.innerText = "Diseño de una aplicación para la compra de Criptomonedas";
    toolsUsed.innerText = "HTML, CSS,"
    imagen.src = './icons/batatabit.svg'
    fileIcon.appendChild(imagen)
    imagen.classList.add('file-icon')
})

calculator.addEventListener('click', () => {
    openFile.classList.toggle('enable'); 
    fileTitle.innerText = "Calculadora";
    fileDescription.innerText = "Calculadora básica";
    toolsUsed.innerText = "HTML, CSS, JavaScript"
    imagen.src = './icons/calculator-svgrepo-com.svg'
    fileIcon.appendChild(imagen)
    imagen.classList.add('file-icon')
})

yardsale.addEventListener('click', () => {
    openFile.classList.toggle('enable'); 
    fileTitle.innerText = "YardSale";
    fileDescription.innerText = "Tienda virtual online para conocer las propiedades de JS y React.";
    toolsUsed.innerText = "HTML, CSS, JavaScript, React"
    imagen.src = './icons/logo_yard_sale.svg'
    fileIcon.appendChild(imagen)
    imagen.classList.add('file-icon')
})

API.addEventListener('click', () => {
    openFile.classList.toggle('enable'); 
    fileTitle.innerText = "API";
    fileDescription.innerText = "Prueba para conocer cómo funcionan las APIs con nombres de usuario.";
    toolsUsed.innerText = "HTML, CSS, JavaScript, WeatherAPI"
    imagen.src = './icons/api-svgrepo-com.svg'
    fileIcon.appendChild(imagen)
    imagen.classList.add('file-icon')
})








abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})

lenguaje.addEventListener('click',  () => {
    menuLenguaje.classList.toggle("visible")
})

