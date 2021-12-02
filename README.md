# vite + vue3 + typescript + electron

##  环境搭建

### 第一步:

```shell
yarn create @vitejs/app // 选择 vue-ts
```

### 第二步:

```js
// 安装electron需要的依赖
yarn add -D concurrently cross-env electron electron-builder wait-on
```

### 第三步: 添加打包的配置

```json
// 修改package.json
"main": "electron/electron.js", // 入口文件
"build": {
    "appId": "com.my-website.my-app",
    "productName": "MyApp",
    "copyright": "Copyright © 2019 ${author}",
    "mac": {
      "category": "public.app-category.utilities"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    },
    "files": [
      "dist/**/*",
      "electron/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "dist_electron"
    }
  },
"scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "serve": "vite preview",
    "electron": "wait-on tcp:3000 && cross-env IS_DEV=true electron .",
    "electron:pack": "electron-builder --dir",
    "electron:dev": "concurrently -k \"cross-env BROWSER=none yarn dev\" \"yarn electron\"",
    "electron:builder": "electron-builder",
    "build:for:electron": "vue-tsc --noEmit && cross-env ELECTRON=true vite build",
    "app:build": "yarn build:for:electron && yarn electron:builder"
  },
```

### 第四步:

```js
// 修改vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue()]
})
```

### 第五步: 

```js
// 创建入口文件
// electron/electron.js
const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

```

```js
// electron/preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
```

