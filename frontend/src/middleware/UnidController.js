const firebase = require("firebase");
const { Alert } = require("react-native");
require("firebase/auth")



module.exports = {

    // Função de cadastro de usuário
    async pegarUnidade() {

        try {
            const db = firebase.firestore()
            const unidades = []
            await db.collection("unidade")
                .get()
                .then(res => (res.forEach(a => {
                    unidades.push({
                        name: a.data().name,
                        cep: a.data().cep,
                        endereco: a.data().endereco,
                        uidUnid: a.id
                    })
                })))
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            return unidades;
        } catch (error) {

        }

    },
    async setCons(docId, COD_USER, COD_UNI, COD_MEDIC, data, hora, espec) {

        const cons = firebase.firestore().collection('consultas')
        const user = firebase.auth().currentUser.id

        if (docId) {
            return await cons.doc(docId).set({ COD_USER, COD_UNI, COD_MEDIC, data, hora });
        } else {
            return await cons.add({ COD_USER, COD_UNI, COD_MEDIC, data, hora, espec });
        }
    },
    async getMedicos(fieldToGet, operator, queryParam) {

        const db = firebase.firestore()
        const unimedRef = db.collection('unimed')
        const medicRef = db.collection('medicos')
        const arrayMedicos = []
        const auxarr = []
      try {
       const codMedicos =  await unimedRef.where(fieldToGet,operator,queryParam).get().then(res => (res.forEach(doc => {
            arrayMedicos.push(doc.data().COD_MED)
        })))
        .catch(console.log)

        for(let i=0;i < arrayMedicos.length;i++){
            console.log(arrayMedicos[i])
            await medicRef.doc(arrayMedicos[i]).get()
            .then(res => auxarr.push(res.data().name))
        }

        


      } catch (error) {
          console.log(error)
      }
      return auxarr
    }
}

