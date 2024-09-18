import express from "express";
import conectDB from "./db.js";
import cors from 'cors'

const app = express();
app.use(cors());
const conexao = await conectDB()

conexao.on('error', (erro) => {
    console.error('erro ao conectar', erro)
})

conexao.once('open', () =>{
    console.log('conectando no MongoDB')
})

app.listen(300, () => {
    console.log("Servidor Rodadando")
})