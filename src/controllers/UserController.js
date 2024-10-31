const UserController = {
    // Criando o user:
    create: async (req, res) => {
        try {
            const { nome, email, idade } = req.body;

            await User.create({ nome, email, idade });

            return res.status(200).json({
                msg: "Usuario criado com sucesso",
                user
            });
        } catch (error) {
            return res.status(500).json({ msg: 'Contate o suporte' });
        }
    },

    // Updatiando o user:
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            const userFinded = User.findById(id);
            if (!userFinded) {
                return res.status(404).json({
                    msg: 'Usuario não encontrado'
                });
            }

            await User.findByIdAndUpdate(id, {
                nome,
                email,
                idade
            });

            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }
    },

    // Deletando o User:
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Contate o suporte'
            })
        }

    },

    // Listando todos os Users:
    getAll: async (req, res) => {

    },

    // Listando um User específico:
    getOne: async (req, res) => {

    }
}