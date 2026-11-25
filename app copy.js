const express = require('express');
const expressLayouts = require('express-ejs-layouts'); 

const app = express();
const porta = 3000;

app.use(expressLayouts);

app.set('layout', 'layouts/principal');
app.set('view engine', 'ejs');

app.use(express.static('public')); 
app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

const produtos = [
  { nome: "Poção de Cura", imagem: "https://placehold.co/100x100?text=Potion", quantidade: 20, atual: 18, minimo: 5 },
  { nome: "Bloco de Diamante", imagem: "https://placehold.co/100x100?text=Diamond", quantidade: 12, atual: 7, minimo: 4 },
  { nome: "Tocha", imagem: "https://placehold.co/100x100?text=Torch", quantidade: 80, atual: 52, minimo: 20 },
  { nome: "Maçã Dourada", imagem: "https://placehold.co/100x100?text=Apple", quantidade: 15, atual: 3, minimo: 5 }
];

app.get("/", (req, res) => res.render("index", { titulo: "Início" }));
app.get("/tabela", (req, res) => res.render("tabela", { titulo: "Tabela de Produtos", produtos }));

app.listen(porta, () => { 
 console.log(`Servidor rodando em http://localhost:${porta}`); 
}); 