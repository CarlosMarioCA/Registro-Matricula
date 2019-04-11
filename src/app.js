const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = process.env.PORT || 1394;
require("./helpers");

const directoriopublico = path.join(__dirname,"../public");
const directoriopartials = path.join(__dirname,"../partials");

app.use(express.static(directoriopublico));

hbs.registerPartials(directoriopartials);

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "hbs");

app.get("/",(req,res) => {res.render('index', {titulo:"Página de registro y Mátrícula"})});

app.post("/admin",(req,res)=>{
	res.render("admin",{
		titulo:"Administración",
		idcurso: parseInt(req.body.idcurso),
		nombrecurso: parseInt(req.body.nombrecurso),
		valorcurso: parseInt(req.body.valorcurso),
		descripcion: req.body.descripcion,
		modalidad: req.body.modalidad,
		intensidad: parseInt(req.body.intensidad)
	})
});

app.post("/mostrarcursos",(req,res)=>{res.render("mostrarcursos",{})});

app.post("/mostrarcursos",(req,res)=>{res.render("mostrarcursos")});

app.post("/inscripcion",(req,res)=>{res.render("inscripcion")});

app.post("/mostrarestudiantes",(req,res)=>{res.render("mostrarestudiantes")});

app.get("*",(req,res)=>{res.render("error")});

app.listen(port, () =>{console.log("Abierta la puerta al Digimundo." + port)});
