import firebase from 'firebase';
import { Alert } from 'react-native';
import 'firebase/auth';





module.exports = {

    // Função de cadastro de usuário
    async cadastrar(email, password, CPF, firstName, lastName, sexo) {

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                const currentUser = firebase.auth().currentUser
                const db = firebase.firestore()
                db.collection("users").doc(currentUser.uid)
                    .set({
                        email: email,
                        CPF: CPF,
                        firstName: firstName,
                        lastName: lastName,
                        sexo: sexo
                    });
                return;

            }).catch((e) => {
                return alert('Erro com cadastro!:' + e)
            });
        } catch (error) {
            console.log(error)
        }
    },

    logar(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }, 

    async logOut(props) {
        try {
            await firebase.auth().signOut()
            Alert.alert("Deslogado", 'Use Sempre e recomende o AGORA para outras pessoas!')
        } catch (err) {
            Alert.alert('Ocorreu um erro com: ', err.message);
        }
    },

    async observador(props,c,view) {
        const resetAction = c.reset({
            index: 1,
            routes:[{ name:view}],
          }); 
        try {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    if(c){
                        console.log('veio1'+user.uid);
                          props.navigation.dispatch(resetAction)
                    }
                    console.log('veio2'+user.uid);
                    props.navigation.navigate('Home')
                } else {
                    console.log('veio 3');
                    props.navigation.dispatch(c.reset({
                        index: 1,
                        routes:[{ name:'Cadastro'}],
                      }))
                }
            });
        } catch (error) {

            console.log("erro com Observador" + error)
        }
    },

    async pegarDadosUser() {
        const db = firebase.firestore()
        const currentUser = firebase.auth().currentUser.uid
        const docRef = db.collection('users').doc(currentUser);
        let userInfo = {}
        try {
            userInfo = await docRef.get()
        } catch (error) {
            console.log("Erro" + error)
        }
        return { ...userInfo.data(), uid: userInfo.id }
    },

    setUserData(changed, email){
        if(changed === 'email'){
            return firebase.auth().currentUser.updateEmail(email);
        }
        else if(changed === 'password'){
            return firebase.auth().sendPasswordResetEmail();
        }
        else if(changed === 'emailpassword'){
            firebase.auth().currentUser.updateEmail(email).then(() => {
                return firebase.auth().sendPasswordResetEmail();
            });
        }
    },

    async getCons(fieldToGet, op, queryParam) {
        const con = firebase.firestore().collection('consultas');
        const user = firebase.auth().currentUser;

        const consultas = []

        try {
            await con.where('COD_USER', '==', user.uid).get()
                .then(res => (res.forEach(a => {
                    consultas.push({
                        ...a.data(),
                        uid: a.id
                    })
                })))
        } catch (error) {
            console.log(error.message)
        }
        return consultas
    },
    async getConsdois() {
        const con = firebase.firestore().collection('consultas');
        const med = firebase.firestore().collection('medicos');
        const user = firebase.auth().currentUser;
        const consultas = []
        const consultasTemp = []

        try {
            await con.where('COD_USER', '==', user.uid).get()
                .then(res => (res.forEach(a => {
                    consultasTemp.push({
                        ...a.data(),
                        uid: a.id
                    })
                })))
            if (consultasTemp.length > 0) {
                for (let i = 0; i < consultasTemp.length; i++) {
                    await med.doc(consultasTemp[i].COD_MEDIC).get()
                        .then(res => {
                            consultas.push({
                                ...consultasTemp[i],
                                name: res.data().name,
                                espec: res.data().especialidade
                            })
                        })
                }
            }
        } catch (error) {
            console.log(error);
        }

        return consultas
    },
    async getRece(fieldToGet, op, queryP) {
        const db = firebase.firestore()
        let infoRece = []
        let infoMedicamentos = []
        try {
            await db.collection("receita").where(fieldToGet, op, queryP).get().then(res => res.forEach(doc => {
                infoRece.push({ ...doc.data(), id: doc.id })
            }))

            if (infoRece.length >= 0) {
                for (let i = 0; i < infoRece.length; i++) {
                    await db.collection("medicamento").where('COD_RECE', '==', infoRece[i].id).get(res => res.forEach(doc => {
                        infoMedicamentos.push({ ...doc.data(), id: doc.id })
                    }))
                }
            }




        } catch (error) {
            console.log(error);
        }

        if (!infoRece.exists) return []
        else return {
            receitaInfo: infoRece,
            medicamentoInfo: infoMedicamentos
        }

    },
    async apagarConsulta(conId) {
        try {
            await firebase.firestore()
                .collection('consultas')
                .doc(conId)
                .delete()
            console.log("deu certo apagou!")
        } catch (error) {

        }
    }
}