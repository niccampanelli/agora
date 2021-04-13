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
                        uidUnid:a.id
                    })
                })))
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
                console.log(unidades)
            return unidades;
        } catch (error) {

        }

    },
     async setCons(docId, COD_USER, COD_UNI, COD_MEDIC, data, hora,espec){

        const cons = firebase.firestore().collection('consultas')
        const user = firebase.auth().currentUser.id

        if(docId){
            return await cons.doc(docId).set({COD_USER, COD_UNI, COD_MEDIC, data, hora});
        } else{
            return await cons.add({COD_USER, COD_UNI, COD_MEDIC, data, hora, espec});
        }
    }
}

