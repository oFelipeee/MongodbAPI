const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Criando o modelo USER dentro do mongodb
modeule.exports = mongoose.model('User', userSchema);