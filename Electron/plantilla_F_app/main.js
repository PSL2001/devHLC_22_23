// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog, webContents} = require('electron')
const path = require('path')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  //ruta
  /* console.log(app.getPath('downloads'))
  console.log(app.getPath('appData'))
  console.log(app.getPath('logs')) */

  //antes de cerrar la aplicación
  /* app.on('before-quit', e => {
    console.log("before-quit")
    let r = dialog.showMessageBoxSync(mainWindow, {
      message: "¿Estas seguro de cerrar?",
      buttons: ['si', 'no']
    })
    if (r == 1) {
      e.preventDefault()
    }
  }) */
/* console.log("Despues") */
//mejorado con BrowserWindow
 /*  mainWindow.on('close', (e)=>{
    let r = dialog.showMessageBoxSync(mainWindow,
        {
          message: 'Are you sure you want to quit?',
          buttons: ['Yes', 'No'],
      });
    if(r == 1){
      e.preventDefault();
    }
  }); */
  


/* menu contextual del ratón */
/* let contens = mainWindow.webContents
contens.on('context-menu', (e, a) => {
  console.log(a.mediaType)
}) */

  /* evitar efecto blink */
  /* mainWindow.on('ready-to-show', () =>{
    mainWindow.show()
  }) */

  /* mainWindow.on('enter-full-screen', () =>{
    setTimeout(() =>{
      mainWindow.setFullScreen(false)
    },1000)
  })
  mainWindow.on('leave-full-screen', () =>{
    setTimeout(() =>{
      mainWindow.setFullScreen(true)
    },1000)
  })
  mainWindow.setFullScreen(true) */

 /*  secondWindow = new BrowserWindow({
    width: 500,
    height: 400,
    parent: mainWindow,
    modal: true,
    frame: false
  })
  secondWindow.loadFile('index2.html') */

  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/* app.on('before-quit', e => {
  console.log('before-quit')

}) */
