const { BrowserWindow, app, Menu, ipcMain } = require("electron");

const path = require("path");
const url = require("url");

/**
 * 
 * browserWindow, la panatalla padre
 * width, anchura pantalla modal 
 * height altura pantalla modal
 * url, url del código a cargar en el proceso renderer
 */
/* function createFormModal(browserWindow, width, height, url) {
  let winForm = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    parent: browserWindow,
    modal: true
  })
  winForm.loadURL(url)
} */

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/renderers/index.html`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  //Trabajar con formulario de añadir registro
  /* let url = `file://${__dirname}/renderer/form_add_keyregister.html`;
  createFormModal(mainWindow, 400, 600, url) */

  //Trabajar con formulario de crear alamacen
  /* let url = `file://${__dirname}/renderer/form_create_filestorage.html`;
  createFormModal(mainWindow, 400, 300, url) */

  //Trabajar con formulario de cargar alamacen
  /* let url = `file://${__dirname}/renderer/form_load_filestorage.html`;
  createFormModal(mainWindow, 400, 300, url) */

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
// Menú
  /* let templateMenu = require('./templateMenu.js').templateMenu
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu)) */

  // Menú
  let mainMenu = require('./menu.js').mainMenu
  //le pasamos la ventana principal y la función nos devuelve un templateMenu con la funcionalidad implementada
  let templateMenu = mainMenu(mainWindow)
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Recibimos los datos del fichero para el almacén de claves y
// la clave de encriptación y lo enviamos a la pantalla principal (lo recibirá su renderer)
ipcMain.on('load-keystorage', (e, args) => {
  mainWindow.webContents.send('load-keystorage', args)
})

// Recibimos un registro a añadir y notificamos a la pantalla principal
ipcMain.on('add-keyregister', (e, register) => {
  mainWindow.webContents.send('add-keyregister', register)
})