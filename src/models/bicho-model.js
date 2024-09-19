import conn from "../conn.js"

const Schema = conn.Schema;

const bichoSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    numeros: {
        type: [Schema.Types.Number],
        min: 0,
        max: 99,
        validate: function(v){
            return v.length == 4 && v.every((n) => n >= 0 && n < 100)
        }
    }
})

const Bicho = conn.model("Bicho", bichoSchema);

export default Bicho;