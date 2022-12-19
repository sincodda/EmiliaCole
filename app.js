const express = require ('express');
const app = express();
const port = 3030;
const path = require ('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname, 'views','index.html')))
app.get('/contact',(req,res)=> res.sendFile(path.resolve(__dirname, 'views','contact.html')))
app.get('/about',(req,res)=> res.sendFile(path.resolve(__dirname, 'views','about.html')))
app.get('/music',(req,res)=> res.sendFile(path.resolve(__dirname, 'views','music.html')))





app.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}`))