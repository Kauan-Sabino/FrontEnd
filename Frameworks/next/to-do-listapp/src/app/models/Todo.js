import mongoose from "mongoose";
import { Script } from "vm";
//arrow function

const TodoSchema = new mongoose.Schema({
    titulo:{
        type:Script,
        required: [true,"O título é obrigatório"],
        trim:true, // remove os espaço antes e depois
        maxlength: [100,"max 100 char"] // menssagem de erro se char>100
    },
    concluida:{
        type: Boolean,
        default:false //o padrão é que seja falso inicialmente
    },
    criadaEm:{
        type: Date,
        default:Date.now
    }
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
//cria um modelo caso não exista
//se modelos já existe, usa o que Todo
//se não existir cria um novo schema para o Danco de Dados