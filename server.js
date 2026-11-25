const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const produtos = [
  { nome: "Poção de Cura", imagem: "https://placehold.co/100x100?text=Potion", quantidade: 20, atual: 18, minimo: 5 },
  { nome: "Bloco de Diamante", imagem: "https://placehold.co/100x100?text=Diamond", quantidade: 12, atual: 7, minimo: 4 },
  { nome: "Tocha", imagem: "https://placehold.co/100x100?text=Torch", quantidade: 80, atual: 52, minimo: 20 },
  { nome: "Maçã Dourada", imagem: "https://placehold.co/100x100?text=Apple", quantidade: 15, atual: 3, minimo: 5 }
];

const dadosDashboard = {
  totalProdutos: 127,
  estoqueBaixo: 14,
  movimentacoes: 38,
  categorias: ["Alimentos", "Ferramentas", "Minérios", "Construção"],
  categoriasValores: [35, 28, 24, 40],
  situacoes: ["Normal", "Estoque baixo", "Zerado"],
  situacoesValores: [83, 14, 30]
};

app.get("/", (req, res) => res.render("home", { titulo: "Início" }));
app.get("/menu-horizontal", (req, res) => res.render("menu-horizontal", { titulo: "Menu Horizontal" }));
app.get("/menu-vertical", (req, res) => res.render("menu-vertical", { titulo: "Menu Vertical" }));
app.get("/menu-responsivo", (req, res) => res.render("menu-responsivo", { titulo: "Menu Responsivo" }));
app.get("/tabela", (req, res) => res.render("tabela", { titulo: "Tabela de Produtos", produtos }));
app.get("/cards", (req, res) => res.render("cards", { titulo: "Cards de Produtos", produtos }));
app.get("/formulario", (req, res) => res.render("formulario", { titulo: "Cadastro de Produto" }));
app.get("/formulario-grid", (req, res) => res.render("formulario-grid", { titulo: "Cadastro em Grade" }));
app.get("/carrossel", (req, res) => res.render("carrossel", { titulo: "Carrossel" }));
app.get("/dashboard", (req, res) => res.render("dashboard", { titulo: "Dashboard", dados: dadosDashboard }));
app.get("/rodape", (req, res) => res.render("rodape", { titulo: "Rodapé" }));
app.get("/card_compacto", (req, res) => res.render("card_compacto", { titulo: "Cards de Produtos", produtos }));

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});