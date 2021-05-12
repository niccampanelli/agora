const firebase = require("firebase");
const { Alert } = require("react-native");
require("firebase/auth")





module.exports = {

    // Função de cadastro de usuário
    async cadastrar(email, password, CPF, firstName, lastName,sexo) {

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
                        sexo:sexo
                    });
                return;
    
            }).catch((e) => {
                return alert('Erro com cadastro!:' + e)
            });
        } catch (error) {
            console.log(error)
        }
    },

    async logar(email, password) {

        try {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {

                    return firebase.auth().signInWithEmailAndPassword(email, password);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        } catch (error) {
            Alert.alert('Não foi possivel fazer login!', 'Voltando a tela de login!')
        }
    },

    async logOut(props) {
        try {
            await firebase.auth().signOut()
            Alert.alert("Deslogado", 'Use Sempre e recomende o AGORA para outras pessoas!')
        } catch (err) {
            Alert.alert('Ocorreu um erro com: ', err.message);
        }
    },

    async observador(props) {
        try {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    props.navigation.navigate('Home')
                } else {
                    console.log("deslogado")
                }
            });
        } catch (error) {

            console.log("erro com Observador" + error)
        }
    },

    async pegarDadosUser() {
        try {
            const db = firebase.firestore()
            const currentUser = firebase.auth().currentUser
            const docRef = db.collection('users').doc(currentUser.uid);
            let userInfo = await docRef.get()
            return {...userInfo.data(), uid: userInfo.id }
        } catch (error) {
            console.log("Erro" + error)
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