import mongoose from "mongoose"

const connectMongo = async() => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece conexão
        .then(()=>console.log("conectado ao MongoDB"))
}

export default connectMongo;