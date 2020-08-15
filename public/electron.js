const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1000,
        height: 640,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
        resizable: false,
    });

    window.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../buid/index.html")}`
    );
});