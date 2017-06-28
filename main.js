var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
    var appWindow, infoWindow; 
    appWindow = new BrowserWindow({
        show: false
    });
    // appWindow.loadURL('https://fella.ga');

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        show: false,
        frame: false
    });

    infoWindow.loadURL('file://' + __dirname + '/info.html');

    app.once('read-to-show', function(){
        appWindow.show();
        infoWindow.show();
    });
});