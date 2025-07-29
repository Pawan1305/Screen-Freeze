const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    kiosk: true,  // Fullscreen, disables system UI
    frame: false, // No window controls
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  // Optional: Register shortcut to close the app (for dev purposes)
  globalShortcut.register('Control+Alt+Q', () => {
    app.quit();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
