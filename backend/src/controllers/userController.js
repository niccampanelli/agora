const firebase = require('firebase');
require('firebase/auth')

module.exports = {

    // Função de cadastro de usuário
    async cadastrar(request, response) {

        // Pega os dados do corpo da requisição
        const { emailValue, passValue, cpfValue, firstName, lastName } = request.body;

        firebase.auth().createUserWithEmailAndPassword(emailValue, passValue).then(() => {

            const currentUser = firebase.auth().currentUser;
            const db = firebase.firestore();

            db.collection("users").doc(currentUser.uid)
                .set({
                    email: emailValue,
                    firstName: firstName,
                    lastName: lastName,
                });

            return response.json({ "message": "Sucesso no cadastro.", "code": "200" });

        }).catch((e) => {
            return response.json({ "message": `Erro no cadastro: ${e}`, "code": "400" });
        });
    },

    async logar(request, response) {

        const { emailValue, passValue } = request.body;

        firebase.auth().signInWithEmailAndPassword(emailValue, passValue)
            .then(() => {
                return response.json({ "message": "Sucesso no login.", "code": "200" });

            }).catch((e) => {
                return response.json({ "message": `Erro no login: ${e}`, "code": "400" });
            });
    },

    async observador(request,response) {

        const isActive = {"code":"200"}

        try {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log('esta logado')
                    isActive = {...isActive,user}
                } else {
                    console.log('nao esta logado')
                }
              
            });
            console.log(isActive)
            return isActive
        } catch (error) {
            console.log("erro com controller de observação")
        }
    },

    async pegarDadosUser() {

        const currentUser = await firebase.auth().currentUser;
            const dbFirestore = firebase.firestore()

        try {
            
            console.log('user')

            const docRef = dbFirestore.collection('users').doc(currentUser.uid)
            let userInfo = await docRef.get()
            console.log("Deu retorno nos dados do user", userInfo.data())
            return ;
        } catch (error) {
            console.log("Erro" + error)
        }
    }
}

