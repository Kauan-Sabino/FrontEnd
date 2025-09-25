import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document{
    _id: string;
    modelo:string;
    marca:string;
    localizacao:string;
    status:string;
    numSerie:string;
    datamanutencao:Date
}

const EquipamentoSchema:Schema<IEquipamento> = new Schema ({
    numSerie: {type:String,required:true, unique:true },
    modelo: {type:String, required:true},
    marca: {type:String, required:true},
    localizacao: {type:String, required:true},
    status:{type:String, enum:["inativo","ativo"],default:"ativo" }
});

const equipamento: Model<IEquipamento> = mongoose.models.Equipamento || mongoose.model<IEquipamento>("Equipamento",EquipamentoSchema);

export default equipamento;