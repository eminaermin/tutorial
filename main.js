const {app, BrowserWindow} = require('electron');

function createWindow(){
    const window = new BrowserWindow({
        width: 800,
        height: 600
    });

    window.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('closed', () => {
    if(process.platform !== 'win32') app.quit();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})