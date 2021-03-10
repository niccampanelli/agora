const firebase = require('firebase');

module.exports = {

    // Função de cadastro de usuário
    async cadastrar(request, response) {

        // Pega os dados do corpo da requisição
        const { emailValue, passValue, cpfValue, firstName, lastName } = request.body;

        try{
            firebase.auth().createUserWithEmailAndPassword(emailValue, passValue).then((user) => {

                const currentUser = firebase.auth().currentUser;
                const db = firebase.firestore();
                
                db.collection("users").doc(currentUser.uid)
                    .set({
                        email: currentUser.email,
                        cpf: cpfValue,
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
    }
}