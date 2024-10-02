import express from "express";
import conectDB from "./db.js";
import cors from 'cors'
import artista from "./models/Artista.js";

const app = express();
app.use(cors());
const conexao = await conectDB()

conexao.on('error', (erro) => {
    console.error('erro ao conectar', erro)
})

conexao.once('open', () =>{
    console.log('conectando no MongoDB')
})

app.get("/artista", async (req, res) =>{
    const listaArtista = await artista.find({});
    res.status(200).json(listaArtista)
})

app.get("/spfc", (req, res) => {
    res.send("TRI MUNDIAL APENAS UM")
})

app.listen(3000, () => {
    console.log("Servidor Rodadando")
})