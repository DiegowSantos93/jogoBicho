import conn from "../conn.js"

const Schema = conn.Schema

const jogoSchema = new Schema({
    numeroEscolhido: [{
        type: Schema.Types.Number,
        required: false,
        min: 0,
        max: 99
    }], 
    // vencedores: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Aposta"
    // }],
    dataInicio: {
        type: Schema.Types.Date,
        required: true
    },
    dataFim: {
        type: Schema.Types.Date,
        required: true
    }
})

const Jogo = conn.model("Jogo", jogoSchema);

export default Jogo;