const express = require('express');
//const rota_usuario = require('./routes/usuarios'); // Importando o arquivo de rotas de usuarios​
const expressLayouts = require('express-ejs-layouts'); //usar o layout em todas as paginas​
const rota_produto = require('./routes/produtos');
const app = express();
const porta = 3000;

// Defina o layout padrão ​
app.use(expressLayouts);

app.set('layout', 'layouts/principal_vertical');
app.set('view engine', 'ejs'); // Configurar o motor de templates EJS ​

app.use(express.static('public')); // Configurar pasta para arquivos estáticos ​
app.use(express.json()); // utilizar dados em formato JSON​

app.use(express.urlencoded({ extended: true })); // utilizar formulários​
//app.use('/usuarios', rota_usuario);

app.use('/produtos', rota_produto);

const produtos = [
  { nome: "Poção de Cura", imagem: "https://placehold.co/100x100?text=Potion", quantidade: 20, atual: 18, minimo: 5 },
  { nome: "Bloco de Diamante", imagem: "https://placehold.co/100x100?text=Diamond", quantidade: 12, atual: 7, minimo: 4 },
  { nome: "Tocha", imagem: "https://placehold.co/100x100?text=Torch", quantidade: 80, atual: 52, minimo: 20 },
  { nome: "Maçã Dourada", imagem: "https://placehold.co/100x100?text=Apple", quantidade: 15, atual: 3, minimo: 5 }
];

const filmes = [
  {
    titulo: "Um Filme Minecraft",
    imagem: "https://cdn.cinematerial.com/p/60x/vdi4tpf9/a-minecraft-movie-movie-poster-xs.jpg?v=1741066497",
    descricao: "Quatro pessoas são transportadas para um mundo cúbico cheio de criaturas e desafios. Para encontrar o caminho de volta, precisam aprender a sobreviver e trabalhar em equipe.",
    genero: "Aventura / Fantasia",
    nota: 5.6,
    classificacao: "10 anos",
    ano: 2025,
    duracao: "101 minutos"
  },
  {
    titulo: "Lilo & Stitch",
    imagem: "https://cdn.cinematerial.com/p/60x/a5z5doga/lilo-stitch-movie-poster-xs.jpg?v=1746538002",
    descricao: "Uma garota havaiana encontra uma criatura alienígena extremamente agitada e acaba criando uma amizade inesperada. Juntos, eles aprendem sobre família, amizade e pertencimento.",
    genero: "Aventura / Comédia",
    nota: 7.0,
    classificacao: "10 anos",
    ano: 2025,
    duracao: "108 minutos"
  },
  {
    titulo: "Como Treinar o Seu Dragão",
    imagem: "https://cdn.cinematerial.com/p/60x/s9fjcmfo/how-to-train-your-dragon-movie-poster-xs.jpg?v=1739366731",
    descricao: "Um jovem viking desenvolve uma amizade inesperada com um dragão, mudando a maneira como seu povo enxerga essas criaturas. Juntos, eles desafiam antigas tradições.",
    genero: "Aventura / Fantasia",
    nota: 7.8,
    classificacao: "10 anos",
    ano: 2025,
    duracao: "125 minutos"
  },
  {
    titulo: "Superman",
    imagem: "https://cdn.cinematerial.com/p/60x/uswr97ps/superman-movie-poster-xs.jpg?v=1752526133",
    descricao: "Clark Kent tenta equilibrar sua vida como jornalista e herói enquanto enfrenta desafios que colocam em dúvida sua confiança. Ele precisa mostrar que esperança e humanidade ainda são importantes.",
    genero: "Ação / Ficção científica",
    nota: 7.1,
    classificacao: "12 anos",
    ano: 2025,
    duracao: "129 minutos"
  },
  {
    titulo: "Os Caras Malvados 2",
    imagem: "https://cdn.cinematerial.com/p/60x/ae55phw8/the-bad-guys-2-movie-poster-xs.jpg?v=1747326819",
    descricao: "Um grupo de antigos criminosos tenta mudar de vida, mas acaba envolvido em uma missão inesperada. Eles precisam lidar com novos desafios e provar que podem fazer escolhas melhores.",
    genero: "Animação / Comédia",
    nota: 7.0,
    classificacao: "10 anos",
    ano: 2025,
    duracao: "104 minutos"
  },
  {
    titulo: "Dog Man",
    imagem: "https://cdn.cinematerial.com/p/60x/sogmxbks/dog-man-movie-poster-xs.jpg?v=1738775956",
    descricao: "Um policial e seu cachorro passam por uma transformação que dá origem a um herói diferente. Dog Man enfrenta desafios enquanto tenta proteger a cidade e fazer o bem.",
    genero: "Animação / Comédia",
    nota: 6.4,
    classificacao: "Livre",
    ano: 2025,
    duracao: "89 minutos"
  },
  {
    titulo: "Zootopia 2",
    imagem: "https://cdn.cinematerial.com/p/60x/6h07mgcj/zootopia-2-movie-poster-xs.jpg?v=1759154866",
    descricao: "Os policiais Judy Hopps e Nick Wilde investigam um novo mistério envolvendo uma criatura desconhecida. A investigação os leva a explorar regiões diferentes e enfrentar novos desafios.",
    genero: "Animação / Comédia",
    nota: 7.7,
    classificacao: "10 anos",
    ano: 2025,
    duracao: "108 minutos"
  },
  {
    titulo: "Toy Story 5",
    imagem: "https://www.cinematerial.com/p/60x/ixyct0pz/toy-story-5-movie-poster-xs.jpg?v=1781997792",
    descricao: "Woody, Buzz e seus amigos enfrentam um novo desafio quando os brinquedos passam a competir com dispositivos eletrônicos pela atenção das crianças. Eles precisam descobrir como continuar importantes nessa nova realidade.",
    genero: "Animação / Aventura",
    nota: 7.3,
    classificacao: "Livre",
    ano: 2026,
    duracao: "102 minutos"
  },
  {
    titulo: "Avengers: Doomsday",
    imagem: "https://www.cinematerial.com/p/60x/kiekzlpd/avengers-doomsday-movie-poster-xs.jpg?v=1786723259",
    descricao: "Heróis de diferentes universos se encontram diante de uma ameaça que pode mudar o destino de todos. Eles precisam unir forças para enfrentar um desafio extraordinário.",
    genero: "Ação / Ficção científica",
    nota: 0,
    classificacao: "A definir",
    ano: 2026,
    duracao: "A definir"
  },
  {
    titulo: "Masters of the Universe",
    imagem: "https://www.cinematerial.com/p/60x/9z6gmaqk/masters-of-the-universe-movie-poster-xs.jpg?v=1777485685",
    descricao: "Um jovem descobre seu destino ligado a um reino fantástico e a uma poderosa espada. Ele precisa compreender seu papel e enfrentar desafios para proteger esse mundo.",
    genero: "Fantasia / Aventura",
    nota: 0,
    classificacao: "A definir",
    ano: 2026,
    duracao: "A definir"
  }
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

const produtoscard = [
    {
        id: 1,
        nome: "Notebook",
        descricao: "Notebook para uso profissional.",
        minimo: 5,
        estoque: 12,
        imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
    },
    {
        id: 2,
        nome: "Teclado",
        descricao: "Teclado para computadores.",
        minimo: 10,
        estoque: 8,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
    },
    {
        id: 3,
        nome: "Mouse",
        descricao: "Mouse óptico para uso diário.",
        minimo: 10,
        estoque: 25,
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
    },
    {
        id: 4,
        nome: "Monitor",
        descricao: "Monitor para estação de trabalho.",
        minimo: 4,
        estoque: 6,
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600"
    },
    {
        id: 5,
        nome: "Headset",
        descricao: "Fone com microfone integrado.",
        minimo: 8,
        estoque: 3,
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },
    {
        id: 6,
        nome: "Webcam",
        descricao: "Câmera para reuniões e aulas.",
        minimo: 5,
        estoque: 15,
        imagem: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600"
    },
    {
        id: 7,
        nome: "Impressora",
        descricao: "Impressora para documentos.",
        minimo: 3,
        estoque: 7,
        imagem: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600"
    },
    {
        id: 8,
        nome: "SSD",
        descricao: "Unidade de armazenamento rápido.",
        minimo: 6,
        estoque: 9,
        imagem: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600"
    },
    {
        id: 9,
        nome: "Memória RAM",
        descricao: "Memória para computadores.",
        minimo: 8,
        estoque: 8,
        imagem: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600"
    },
    {
        id: 10,
        nome: "Gabinete",
        descricao: "Gabinete para montagem de PCs.",
        minimo: 4,
        estoque: 11,
        imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600"
    }
];

/*app.get("/tabela", (req, res) => res.render("index", { titulo: "Início" }));*/
//  app.get("/", (req, res) => res.render("index", { titulo: "Início" }));
// Página inicial independente
app.get('/', (req, res) => {
    res.render('index',{
        layout: false
    });
});
app.get("/menu-horizontal", (req, res) => res.render("menu-horizontal", { titulo: "Menu Horizontal" }));
app.get("/menu-vertical", (req, res) => res.render("menu-vertical", { titulo: "Menu Vertical" }));
app.get("/menu-responsivo", (req, res) => res.render("menu-responsivo", { titulo: "Menu Responsivo" }));
app.get("/tabela", (req, res) => res.render("tabela", { titulo: "Tabela de Produtos", produtos }));
app.get("/tabelafilmes", (req, res) => res.render("tabelafilmes", { titulo: "Tabela de Filmes", filmes }));
app.get("/cards", (req, res) => res.render("cards", { titulo: "Cards de Produtos", produtoscard }));
app.get("/formulario", (req, res) => res.render("formulario", { titulo: "Cadastro de Produto" }));
app.get("/formulario-grid", (req, res) => res.render("formulario-grid", { titulo: "Cadastro em Grade" }));
app.get("/carrossel", (req, res) => res.render("carrossel", { titulo: "Carrossel" }));
app.get("/carrossel2", (req, res) => res.render("carrossel2", { titulo: "Carrossel" }));
app.get("/dashboard", (req, res) => res.render("dashboard", { titulo: "Dashboard", dados: dadosDashboard }));
app.get("/rodape", (req, res) => res.render("rodape", { titulo: "Rodapé" }));
app.get("/card_compacto", (req, res) => res.render("card_compacto", { titulo: "Cards de Produtos", produtos }));
app.get("/layout", (req, res) => res.render("principal2"));
app.get("/modal", (req, res) => res.render("modal", {titulo: "Modal"}));
app.get("/painel", (req, res) => res.render("painel", {titulo: "Painel"}));
app.get("/produto", (req, res) => res.render("produto", {titulo: "Produtos"}));
app.get('/ladding', (req, res) => {
    res.render('ladding',{
        layout: false
    });
});

  if (require.main === module && !process.env.VERCEL) { 
      app.listen(process.env.PORT || 3000); 
  } 
  module.exports = app; 



// Disponibiliza a informação de login para todas as páginas
// app.use((req, res, next) => {
//     res.locals.usuarioLogado = !!req.session.usuario;
//     next();
// });

// Considerando quando usuário faz login armazena em:
// req.session.usuario


// Agora no ejs basta utilizar menus diferentes com if:
//  <% if (usuarioLogado) { %>