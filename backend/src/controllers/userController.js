const firebase = require('firebase');
require('firebase/auth')

module.exports = {

    // Função de cadastro de usuário
    async cadastrar(request, response) {

        // Pega os dados do corpo da requisição
        const { emailValue, passValue, cpfValue, firstName, lastName } = request.body;
        const currentUser = await firebase.auth().currentUser;

        try {
            firebase.auth().createUserWithEmailAndPassword(emailValue, passValue).then((user) => {


                const db = firebase.firestore();

                db.collection("users").doc(currentUser.uid)
                    .set({
                        email: emailValue,
                        firstName: firstName,
                        lastName: lastName,
                    });

                return response.json("Sucesso no cadastro.")
            });


        } catch (err) {
            const errorObj = {
                "message": err.message,
                "code": err.code
            }

            return response.json(errorObj)
        }
    },

    async logar(request, response) {

        const { emailValue, passValue } = request.body;

        try {
           firebase.auth().signInWithEmailAndPassword(emailValue, passValue)
                .then((user) => {
                    console.log('Logou com succeso')
                    return response.json("Logou");
                })
           
        } catch (err) {
            console.log('erro no controller, f logar' + err)
            return response.json(err);
        }

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