// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

//Funcion para crear la ventana modal de formulario
function createFormModal(browserWindow, width, height, url) {
  let winForm = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    parent: browserWindow,
    modal: true,
  })
  winForm.loadURL(url)
}

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
  mainWindow.loadFile('renderer/index.html')

  let templateMenu = require('./templateMenu.js').templateMenu
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu))

  let url = `file://${path.join(__dirname, 'renderer', 'form_add_keyregister.html')}`;
  createFormModal(mainWindow, 400, 600, url)

  // let url2 = `file://${path.join(__dirname, 'renderer', 'form_create_filestorage.html')}`;
  // createFormModal(mainWindow, 400, 600, url2)

  // let url3 = `file://${path.join(__dirname, 'renderer', 'form_load_filestorage.html')}`;
  // createFormModal(mainWindow, 400, 600, url3)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

