// const { Pool } = require('pg');
// require('dotenv').config();

// // Configuração da conexão com PostgreSQL
// const conexao = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD
// });

// module.exports = conexao;

require('dotenv').config(); 
const { Pool } = require('pg'); 
 
const bd = new Pool({ 
    host: process.env.DB_HOST, 
    port: Number(process.env.DB_PORT), 
    database: process.env.DB_NAME, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    ssl: { rejectUnauthorized: false }, 
    max: 3 
}); 
 
module.exports = bd; 