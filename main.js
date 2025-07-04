import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use createRequire to import CommonJS modules
const require = createRequire(import.meta.url);
require("electron-reload")(__dirname, {
	electron: require(path.join(__dirname, "node_modules", "electron")),
});

import { app, BrowserWindow, ipcMain } from "electron/main";
import { join } from "node:path";

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: join(__dirname, "preload.js"),
		},
	});

	win.loadFile("index.html");
};

app.whenReady().then(() => {
	ipcMain.handle("ping", () => "pong");
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
