const firebase = require('firebase');

module.exports = {
    async cadastrar(request, response) {

        console.log("asdasda")

        const { email, password, cpf, firstName, lastName } = request.body;

        try{
            firebase.auth().createUserWithEmailAndPassword(email, password);
            const currentUser = firebase.auth().currentUser;
    
            const db = firebase.firestore();
    
            db.collection("users").doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    cpf: cpf,
                    firstName: firstName,
                    lastName: lastName,
                });
    
            return response.json("Sucesso no cadastro.")
    
        } catch (err) {
            const errorObj = {
                "message": err.message,
                "code": err.code
            }
    
            return response.json(errorObj)
        }
    }
}