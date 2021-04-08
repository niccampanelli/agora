const firebase = require("firebase");
const { Alert } = require("react-native");
require("firebase/auth")



module.exports = {

    // Função de cadastro de usuário
    async pegarUnidade() {

        try {
            const db = firebase.firestore()
            const unidades = [ ]
            await db.collection("unidade")
                .get()
                .then(res => (res.forEach(a => {
                    unidades.push({
                        name:a.data().name,
                        cep:a.data().cep,
                        endereco:a.data().endereco,
                        uid:a.data().uid
                    })
                })))
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                console.log(unidades)
            return unidades;
        } catch (error) {

        }

    }
}

