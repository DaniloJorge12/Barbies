import express from "express";
import dotenv from "dotenv";
import barbiesRoutes from "./src/routes/barbieRoutes.js"
import barbies from "./src/models/dados.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req,res) => {
    res.send(barbies)
})

app.use("/Barbies", barbiesRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});