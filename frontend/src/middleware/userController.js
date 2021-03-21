const firebase = require("firebase")
require("firebase/auth")

module.exports = {

    // Função de cadastro de usuário
    async cadastrar(email, password, cpf, firstName, lastName) {

        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

            const currentUser = firebase.auth().currentUser;
            const db = firebase.firestore();

            db.collection("users").doc(currentUser.uid)
                .set({
                    email: email,
                    CPF: cpf,
                    firstName: firstName,
                    lastName: lastName,
                });

            return response.json({ "message": "Sucesso no cadastro.", "code": "200" });

        }).catch((e) => {
            return response.json({ "message": `Erro no cadastro: ${e}`, "code": "400" });
        });
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
            let user = firebase.auth().currentUser
            console.log("Conectado como :" + user.uid)
            return user
        } catch (error) {

        }
    },

    async logOut(props) {
    try {
        await firebase.auth().signOut()
        console.log('Deslogado!')
    } catch (err) {
        Alert.alert('Ocorreu um erro com: ', err.message);
    }
},

async observador(props) {
    try {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('esta logado ' + user.uid)
                props.navigation.navigate('Home')
            } else {
                console.log('Não esta logado, voltando ao login')
            }
        });
    } catch (error) {
        console.log("erro com controller" + error)
    }
},

async pegarDadosUser() {
    try {
        const user = await firebase.auth().currentUser
        const db = await firebase.firestore()

        const docRef = db.collection('users').doc(user.uid);
        let userInfo = await docRef.get()
        console.log("Deu retorno", userInfo.data())
        return userInfo.data()
    } catch (error) {
        console.log("Erro" + error)
    }
}
}

