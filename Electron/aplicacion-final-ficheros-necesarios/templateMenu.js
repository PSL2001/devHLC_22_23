
  let templateMenu = [
    {
      label: "Almacenes",
      submenu: [
        {
          label: "crear",
          accelerator: "CommandOrControl+N",
          click() {
            console.log("crear")
          }
        },
        {
          label: "cargar",
          accelerator: "CommandOrControl+L",
          click() {
            console.log("cargar")
          }
        },
        {
          label: "salir",
          role: "quit"
        }
      ]
    },
    {
      label: "Acciones",
      submenu: [
        {
          label: "Añadir clave",
          accelerator: "CommandOrControl+B",
          click() {
            console.log("añadir")
          }
        },
        {
          label: "Editar clave",
          accelerator: "CommandOrControl+E",
          click() {
            console.log("editar")
          }
        },
        {
          label: "Eliminar clave",
          accelerator: "CommandOrControl+D",
          click() {
            console.log("eliminar")
          }
        }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forcereload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { type: "separator" },
        { role: "togglefullscreen" }
      ]
    }
  ];

module.exports.templateMenu = templateMenu;
