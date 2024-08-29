// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  ipcRenderer: {
    send: (channel, data) => ipcRenderer.send(channel, data),
  },
  send: (data) => ipcRenderer.send('upload-files', data),
  receive: function () {
    ipcRenderer.on('file-upload-response', (e, data) => {
      console.log(data);
    });
  },
});
