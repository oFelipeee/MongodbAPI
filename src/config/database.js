const mongoose = require("mongoose");

const connectDB = async () => {
    try {
    // URL de Conexao
    const mongoURI = "mongodb://localhost:27017/bancomongo";
    await mongoose.connect(mongoURI);

    console.log("mongoDB conectado!");
    } catch (error) {
        console.error("Erro ao conectar o mongo:", error);
        process.exit(1);
    }
}

module.exports = connectDB;