import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrdemServico extends Document{
    _id: string;
    titulo:string;
    descricao:string;
    tipoManutencao:string;
    status:string;
    dataSolicitada:Date;
    dataFinalizada:Date | null;
    tecnicoId:string;
    equipamentoId:string;
}

const OrdemServicoSchema:Schema<IOrdemServico> = new Schema ({
    tecnicoId: {type:String,required:true },
    titulo: {type:String, required:true},
    descricao: {type:String, required:true},
    tipoManutencao: {type:String,enum:["preventiva","emergencia","preditiva"] ,required:true},
    status:{type:String, enum:["inativo","ativo"],default:"ativo" },
    dataSolicitada:{type:Date, default:Date.now},
    dataFinalizada:{type:Date,default:null},
    equipamentoId: {type:String, required:true}

});

const OrdemServico: Model<IOrdemServico> = mongoose.models.OrdemServico || mongoose.model<IOrdemServico>("OrdemServico",OrdemServicoSchema);

export default OrdemServico;