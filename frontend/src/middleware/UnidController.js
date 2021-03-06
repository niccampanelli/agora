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
    async setCons(docId, COD_USER, COD_UNI, COD_MEDIC, data, hora,obs) {

        const cons = firebase.firestore().collection('consultas')
        const user = firebase.auth().currentUser.id



        if (docId) {
            return await cons.doc(docId).set({ COD_USER, COD_UNI, COD_MEDIC, data, hora });
        } else {
            return await cons.add({ COD_USER, COD_UNI, COD_MEDIC, data, hora,obs });
        }
    },
    async getMedicos(fieldToGet, operator, queryParam) {

        const db = firebase.firestore()
        const unimedRef = db.collection('unimed')
        const medicRef = db.collection('medicos')
        const arrayMedicos = []
        const auxarrN = []
        try {
            const codMedicos = await unimedRef.where(fieldToGet, operator, queryParam).get().then(res => (res.forEach(doc => {
                arrayMedicos.push(doc.data().COD_MED)
            })))
                .catch(console.log)

            for (let i = 0; i < arrayMedicos.length; i++) {
                await medicRef.doc(arrayMedicos[i]).get()
                    .then(res => {
                        auxarrN.push({ name: res.data().name, id: res.id })
                    })
            }




        } catch (error) {
            console.log(error)
        }
        return auxarrN
    },
    async getEspecs(fieldToGet, operator, queryParam) {
        const db = firebase.firestore()
        const unimedRef = db.collection('unimed')
        const medicRef = db.collection('medicos')
        const arrayMedicos = []
        const arrayMedicosEspec = []
        const auxarrEspec = []
        let aux = []

        try {
            const codMedicos = await unimedRef.where(fieldToGet, operator, queryParam).get().then(res => (res.forEach(doc => {
                arrayMedicos.push(doc.data().COD_MED)
                //com o cod_med puxa as info com espec e faz a comparaçao se der certo lista elas
                //so puxa e dps compara pq vc ja sabe que esta na unidade 
            })))
                .catch(console.log)

            for (let i = 0; i < arrayMedicos.length; i++) {
                await medicRef.doc(arrayMedicos[i]).get()
                    .then(res => {
                        auxarrEspec.push(res.data().especialidade)
                    })
                aux = auxarrEspec.filter((el, i) => auxarrEspec.indexOf(el) === i)
            }
        } catch (err) {
            console.log(err)
        }

        return aux

    },
    async getMedicEspecs(fieldToGet, operator, queryParam, especSelected) {
        const db = firebase.firestore()
        const unimedRef = db.collection('unimed')
        const medicRef = db.collection('medicos')
        const arrayMedicos = []
        const arrayMedicosEspec = []
        const auxarrEspec = []

        try {
            const codMedicos = await unimedRef.where(fieldToGet, operator, queryParam).get().then(res => (res.forEach(doc => {
                arrayMedicos.push(doc.data().COD_MED)
                //com o cod_med puxa as info com espec e faz a comparaçao se der certo lista elas
                //so puxa e dps compara pq vc ja sabe que esta na unidade 
            })))
                .catch(console.log)

            for (let i = 0; i < arrayMedicos.length; i++) {

                await medicRef.doc(arrayMedicos[i]).get()
                    .then(res => {
                        arrayMedicosEspec.push({ espec: res.data().especialidade, id: res.id, name: res.data().name })
                    })
            }
        } catch (err) {
            console.log(err)
        }
        return arrayMedicosEspec

    },
    async pegarLocal(u) {
        const db = firebase.firestore()
        let info
        try {
            info = await db.collection('unidade').doc(u).get()

        } catch (error) {
            console.log('Erro com: ' + error)
            info = { message: true }
        }
        return { ...info.data() }

    },
    async getAvaData(u) {

        var tempArray2 = [];

        try {
            await firebase.firestore().collection('unidade').doc(u).get()
                .then(doc => {
                    const iniExped = doc.get('iniExped');
                    const fimExped = doc.get('fimExped');
                    var tempArray = [];
                    var exped;
                    if (fimExped - iniExped < 0) {
                        const value = fimExped - iniExped;
                        exped = 24.0 + value + iniExped;
                    } else {
                        exped = fimExped - iniExped;
                    }
                    for (var indice = iniExped; indice < exped; indice += 0.25) {
                        const timeInSeconds = indice * 3600;
                        var timeHour = Math.floor(indice);
                        var timeMinute = Math.floor(timeInSeconds / 60) - (timeHour * 60);
                        if (timeHour >= 24) {
                            timeHour = timeHour - 24;
                        }
                        if (timeHour.toString().length === 1) {
                            timeHour = "0" + timeHour;
                        }
                        if (timeMinute === 0) {
                            timeMinute = "00";
                        }
                        const timeToAdd = timeHour + ":" + timeMinute;
                        tempArray = [...tempArray, timeToAdd];
                        
                        tempArray2.push(...tempArray)
                    }
                })
        } catch (error) {
            console.log(error);
        }

        return tempArray2
    }
}

