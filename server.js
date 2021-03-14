const express = require('express');
const path = require('path');
const app = express();
app.get('/sample', (req, res) => res.send('Hello Tekton Dashboard !' + path.resolve(__dirname, '.'));
app.get('/bundle', (req, res) => res.sendFile(path.resolve(__dirname, './tekton-extension/src/index.js')));
app.listen(3000, '0.0.0.0');

