const express = require('express');
const bd = require('../conexao');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
      
    const resultado = await bd.query(`
           	SELECT
                p.id_produto,
                p.nome,
                p.imagem,
                c.nome AS categoria,
                p.descricao,
                p.preco,
                p.estoque,
                p.minimo
            FROM produtos p
            INNER JOIN categorias c
                ON p.id_categoria = c.id_categoria
            ORDER BY p.id_produto;
        `);
    res.render('produto',{
        titulo: "Produtos",
        produtos: resultado.rows
    });
  } catch (err) {
    res.status(500).send('Erro no servidor ao listar produtos');
  }
});


module.exports = router;