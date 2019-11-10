'use strict';

const { app, BrowserWindow } = require('electron');


module.exports = function bootstrap() {

	app.on('ready', () => {
		const mainWindow = new BrowserWindow(windowOptions)
		mainWindow.loadURL('http://baidu.com');
		mainWindow.maximize();
	});
};