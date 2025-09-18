import mongoose, { Document, Model, Schema } from "mongoose";

//definir estrutura do Obj
export interface Itarefa extends Document {
    //herdamos a base de documentos do mongoose
    //atributos do Obj
    _id:string;
    titulo:string;
    concluida:boolean;
    dataCriacao:Date;
}

//criar as regras (Schema) do mongoDB

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema ({
    titulo: {
        type: String,
        required:[true , "o titulo é obrigatório"],
        maxlength:[50, "maximo de 50 caracteres"]
    },
    concluida:{
        type: Boolean,
        default:false
    },
    dataCriacao:{
        type:Date,
        default: Date.now
    }
})

//tomap e fromMap do modelo
const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa",TarefaSchema);

//transforma em um modelo reutilizavel
export default Tarefa; 