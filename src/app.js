const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
require("./helpers");

const directoriopublico = path.join(__dirname,"../public");
const directoriopartials = path.join(__dirname,"../partials");

app.use(express.static(directoriopublico));

hbs.registerPartials(directoriopartials);

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "hbs");

app.get("/",(req,res) => {res.render('index')});

app.post("/admin",(req,res)=>{res.render("admin")});

app.post("/mostrarcursos",(req,res)=>{res.render("mostrarcursos")});

app.post("/mostrarcursos",(req,res)=>{res.render("mostrarcursos")});

app.post("/inscripcion",(req,res)=>{res.render("inscripcion")});

app.post("/mostrarestudiantes",(req,res)=>{res.render("mostrarestudiantes")});

app.get("*",(req,res)=>{res.render("error")});

app.listen(1394, () =>{console.log("Abierta la puerta al Digimundo.")});