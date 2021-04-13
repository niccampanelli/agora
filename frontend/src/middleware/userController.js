const firebase = require("firebase");
const { Alert } = require("react-native");
require("firebase/auth")





module.exports = {
    
    // Função de cadastro de usuário
    async cadastrar(email, password, CPF, firstName, lastName) {

      await  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            const currentUser =  firebase.auth().currentUser
            const db = firebase.firestore()
            db.collection("users").doc(currentUser.uid)
                .set({
                    email: email,
                    CPF: CPF,
                    firstName: firstName,
                    lastName: lastName,
                });
                return;

        }).catch((e) => {
            return alert('Erro com cadastro!:'+e)
        });
    },

    async logar(email, password) {

        try {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    return firebase.auth().signInWithEmailAndPassword(email, password);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        } catch (error) {
            Alert.alert('Não foi possivel fazer login!','Voltando a tela de login!')
        }
    },

    async logOut(props) {
    try {
        await firebase.auth().signOut()
        Alert.alert("Deslogado",'Use Sempre e recomende o AGORA para outras pessoas!')
    } catch (err) {
        Alert.alert('Ocorreu um erro com: ', err.message);
    }
},

async observador(props) {
    try {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.firstName)
                props.navigation.navigate('Home')
            } else {
                Alert.alert("Deslogado",'Voltando a tela de login!')
                props.navigation.navigate("Cadastro")
            }
        });
    } catch (error) {
        console.log("erro com Observador" + error)
    }
},

async pegarDadosUser() {
    try {
        const db =  firebase.firestore()
        const currentUser =  firebase.auth().currentUser
        const docRef = db.collection('users').doc(currentUser.uid);
        let userInfo = await docRef.get()
        return {...userInfo.data(),uid:userInfo.id}
    } catch (error) {
        console.log("Erro" + error)
    }
},
async getCons(fieldToGet,op,queryParam){
    const con = firebase.firestore().collection('consultas');

    const consultas = [] 
    await con.where(fieldToGet,op,queryParam).get()
    .then(res => (res.forEach(a => {
        consultas.push({
            ...a.data(),
            uid:a.id
        })
    }))).catch(console.log)
    return consultas
}
}

