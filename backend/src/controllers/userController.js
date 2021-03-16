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

                return response.json({"message": "Sucesso no cadastro.", "code": "200"});

            }).catch((e) => {
                return response.json({"message": `Erro no cadastro: ${e}`, "code": "400"});
            });
    },

    async logar(request, response) {

        const { emailValue, passValue } = request.body;

        firebase.auth().signInWithEmailAndPassword(emailValue, passValue)
            .then(() => {
                return response.json({"message": "Sucesso no login.", "code": "200"});
                
            }).catch((e) => {
                return response.json({"message": `Erro no login: ${e}`, "code": "400"});
            });
    },

    async observador() {
        try {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    return 1
                } else {
                    return 2
                }
            });
        } catch (error) {
            console.log("erro com controller")
        }
    }

}