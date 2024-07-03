const {app, BrowserWindow, Menu, shell} = require('electron')

let mainWindow = null;
app.on('ready', ()=>{
    console.log('Iniciando electron');
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        // autoHideMenuBar:true,
        resizable:false,
        icon: 'assets/icon/calculadora.ico',
        webPreferences:{
            preload: `${__dirname}/preload.js`
        }
    })
    //formas de buscar o arquivo html 
    //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    mainWindow.loadFile('app/index.html')
})

app.on('window-all-closed', ()=>{
    app.quit();
})
//personalizando o menu

const template = [
    {
        label: 'arquivo',
        submenu: [
            {
                label: 'sair',
                //atribuindo
                click: ()=> app.quit(),
                accelerator: 'Alt+F4'
            }
        ]
    },
    {
        label: 'exibir',
        submenu: [
            {
                label: 'Recarregar',
                role: 'reload'
            },
            {
                label: 'Ferramenta do desenvolvedor',
                role: 'toggleDevTools',
            },
            {   //separar submenus com uma linha
                type: 'separator'
            },
            {
                label: 'Aplicar zoom',
                role: 'zoomIn'
            },
            {
                label: 'Reduzir zoom',
                role: 'zoomOut'
            },
            {
                label: 'restaurar zoom',
                role: 'resetZoom'
            }
        ]
    },
    {
        label: 'ajuda',
        submenu: [
        
            {
                label: 'Documentação',
                click: ()=> shell.openExternal('https://www.electronjs.org/pt/docs/latest/api/shell')
            },
            {
                type: 'separator'
            },
            {
                label: 'Sobre',
                click: ()=> paginaSobre()
            }
        ]
    }
]

const paginaSobre = ()=> {
    const sobre = new BrowserWindow({
        width: 1000,
        height: 800,
        resizable: false,
    })
    sobre.loadFile('app/sobre.html')
}