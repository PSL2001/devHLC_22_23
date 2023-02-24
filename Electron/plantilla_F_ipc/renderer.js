const {ipcRenderer} = require('electron')
// Mensaje síncrono, devuelve la respuesta del proceso main
// let r = ipcRenderer.sendSync('elcanal', 'mensaje desde renderer')
// Mensaje asíncrono la respuesta hay que esperarla en un listener
ipcRenderer.send('elcanalasync', 'mensaje async desde renderer')

console.log('hola');

ipcRenderer.on('canal_respuesta', (event, arg) => {
console.log(arg)
})

//Recibe mensaje asíncrono
ipcRenderer.on('elcanal', (event, arg) => {
console.log(arg)
})
