const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({width: 1200, height: 900, webPreferences: { nodeIntegration: true }})
	win.loadURL(url.format({
		pathname: path.join(
			__dirname,
			'dist/point_of_sale_app/index.html'),
		protocol: 'file:',
		slashes: true
	}))

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

