import "dotenv/config";
import express from "express";
import apostaRouter from "./routes/aposta-route.js";
import bichoRouter from "./routes/bicho-route.js";
import jogoRouter from "./routes/jogo-route.js";

const app = express();

app.use(express.json());

app.use("/aposta", apostaRouter);
app.use("/bicho", bichoRouter);
app.use("/jogo", jogoRouter);


app.listen(process.env.API_PORT, () => {
    console.log(`Server is running in port ${process.env.API_PORT}`)
});

