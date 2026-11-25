// ============================================================
// DADOS DO ESTOQUE
// Este arquivo contém os dados e a configuração dos gráficos.
// Para adaptar o dashboard, comece alterando os objetos abaixo.
// ============================================================

// Array de objetos: cada objeto representa um produto do estoque.
const produtos = [
    { id: 1, nome: "Caderno universitário", categoria: "Papelaria", quantidade: 42, estoqueMinimo: 10, valorUnitario: 18.90 },
    { id: 2, nome: "Caneta azul", categoria: "Papelaria", quantidade: 85, estoqueMinimo: 20, valorUnitario: 2.50 },
    { id: 3, nome: "Mouse USB", categoria: "Informática", quantidade: 18, estoqueMinimo: 8, valorUnitario: 39.90 },
    { id: 4, nome: "Teclado USB", categoria: "Informática", quantidade: 12, estoqueMinimo: 6, valorUnitario: 69.90 },
    { id: 5, nome: "Bola de futsal", categoria: "Esportivo", quantidade: 7, estoqueMinimo: 5, valorUnitario: 119.90 },
    { id: 6, nome: "Cone de treinamento", categoria: "Esportivo", quantidade: 30, estoqueMinimo: 10, valorUnitario: 14.90 },
    { id: 7, nome: "Detergente", categoria: "Limpeza", quantidade: 9, estoqueMinimo: 12, valorUnitario: 3.80 },
    { id: 8, nome: "Papel toalha", categoria: "Limpeza", quantidade: 15, estoqueMinimo: 8, valorUnitario: 8.50 }
];

// Dados fictícios de movimentação mensal.
// Altere os valores para atualizar o gráfico de linhas.
const movimentacoes = {
    meses: ["Jun", "Jul", "Ago", "Set", "Out", "Nov"],
    entradas: [45, 60, 52, 75, 68, 82],
    saidas: [30, 42, 48, 55, 61, 58]
};

// ============================================================
// CÁLCULO DOS INDICADORES NUMÉRICOS
// ============================================================

// Soma a quantidade de todos os produtos.
//Esse código utiliza o método .reduce() do JavaScript, que serve para percorrer um array e acumular valores até chegar a um único resultado.
const totalUnidades = produtos.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0);

// Calcula o valor total armazenado no estoque.
const valorEstoque = produtos.reduce((total, produto) => {
    return total + (produto.quantidade * produto.valorUnitario);
}, 0);

// Conta quantos produtos estão abaixo do estoque mínimo.
const produtosEstoqueBaixo = produtos.filter(produto => {
    return produto.quantidade <= produto.estoqueMinimo;
}).length;

// Conta quantas categorias diferentes existem.
const categorias = [...new Set(produtos.map(produto => produto.categoria))];

// Exibe os números nas divs do arquivo EJS.
document.getElementById("totalUnidades").textContent = totalUnidades;
document.getElementById("valorEstoque").textContent = valorEstoque.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});
document.getElementById("estoqueBaixo").textContent = produtosEstoqueBaixo;
document.getElementById("totalCategorias").textContent = categorias.length;

// ============================================================
// ORGANIZAÇÃO DOS DADOS PARA OS GRÁFICOS
// ============================================================

// Conta quantos produtos pertencem a cada categoria.
const quantidadePorCategoria = categorias.map(categoria => {
    return produtos.filter(produto => produto.categoria === categoria).length;
});

// Separa os nomes e as quantidades dos produtos.
const nomesProdutos = produtos.map(produto => produto.nome);
const quantidadesProdutos = produtos.map(produto => produto.quantidade);

// ============================================================
// GRÁFICO 1 - PIZZA
// Para mudar o tipo, altere type: "pie".
// Exemplos: "doughnut", "bar", "line".
// ============================================================

const graficoPizza = document.getElementById("graficoPizza");

new Chart(graficoPizza, {
    type: "pie",
    data: {
        labels: categorias,
        datasets: [{
            label: "Produtos por categoria",
            data: quantidadePorCategoria,
            backgroundColor: ["#5B8DEF", "#53B68A", "#F2B84B", "#E87979"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// ============================================================
// GRÁFICO 2 - COLUNAS
// No Chart.js, o tipo "bar" cria colunas verticais por padrão.
// ============================================================

const graficoColunas = document.getElementById("graficoColunas");

new Chart(graficoColunas, {
    type: "bar",
    data: {
        labels: categorias,
        datasets: [{
            label: "Quantidade de produtos",
            data: quantidadePorCategoria,
            backgroundColor: "#5B8DEF"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ============================================================
// GRÁFICO 3 - BARRAS HORIZONTAIS
// É o mesmo tipo "bar", mas com indexAxis: "y".
// ============================================================

const graficoBarras = document.getElementById("graficoBarras");

new Chart(graficoBarras, {
    type: "bar",
    data: {
        labels: nomesProdutos,
        datasets: [{
            label: "Unidades em estoque",
            data: quantidadesProdutos,
            backgroundColor: "#53B68A"
        }]
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

// ============================================================
// GRÁFICO 4 - LINHAS
// Compara entradas e saídas ao longo dos meses.
// ============================================================

const graficoLinhas = document.getElementById("graficoLinhas");

new Chart(graficoLinhas, {
    type: "line",
    data: {
        labels: movimentacoes.meses,
        datasets: [
            {
                label: "Entradas",
                data: movimentacoes.entradas,
                borderColor: "#53B68A",
                backgroundColor: "#53B68A",
                tension: 0.3
            },
            {
                label: "Saídas",
                data: movimentacoes.saidas,
                borderColor: "#E87979",
                backgroundColor: "#E87979",
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ============================================================
// TRECHO DE REFERÊNCIA DA DOCUMENTAÇÃO DO CHART.JS
// A estrutura abaixo representa o modelo básico apresentado
// na documentação oficial: selecionar um canvas e criar um
// gráfico com new Chart(), informando type, data e options.
// Foi deixado como comentário para consulta; os gráficos
// utilizados neste dashboard estão configurados acima.
//
// const meuGrafico = document.getElementById("meuGrafico");
//
// new Chart(meuGrafico, {
//     type: "bar",
//     data: {
//         labels: ["Janeiro", "Fevereiro", "Março"],
//         datasets: [{
//             label: "Exemplo",
//             data: [10, 20, 15]
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });
//
// Documentação: https://www.chartjs.org/docs/latest/
// ============================================================
