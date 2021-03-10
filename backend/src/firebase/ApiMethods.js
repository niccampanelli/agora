const { firebase } = require('firebase/app');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAs6N2-qnM5nFz23XUKoZPo8hacolIwTzA",
    authDomain: "agora-d193e.firebaseapp.com",
    projectId: "agora-d193e",
    storageBucket: "agora-d193e.appspot.com",
    messagingSenderId: "92634649276",
    appId: "1:92634649276:web:5c2b7d49f6eea6df3776b9",
    measurementId: "G-2Y0BB7V9EW"
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    cadastrar(email, password, cpf, firstName, lastName) {

        /* Faz um doc na collection users e seta os parametros em um array */
    
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
    
            return "Sucesso no cadastro."
    
        } catch (err) {
            const errorObj = {
                "message": err.message,
                "code": err.code
            }
    
            return errorObj
        }
    },
    
    login(email, password) {
    
        /**
         * Loga o usuario, da pra fazer as consultas 
         */
    
        try{
            firebase.auth().signInWithEmailAndPassword(email, password);
            let user = firebase.auth().currentUser;
            Alert.alert("Login no AGORA", 'Login realizado com succeso!');
            return user;
    
        } catch (err) {
            Alert.alert("Algo saiu errado com:", err.message);
        }
    },
    
    loggingOut() {
        try{
            firebase.auth().signOut();
        } catch (err) {
            Alert.alert('Algo deu errado com:', err.message);
        }
    },

    consulta(email) {
        try {
            const db = firebase.firestore()
            const user = firebase.auth().currentUser
            const select = db.collection('users').get(user.id);
    
            select.forEach((doc) => {
                //  console.log(doc.id, '=>', doc.data().firstName);
                Alert.alert("Logado como:" + doc.firstName);
    
            });
        } catch (error) {
            console.log("erro com:" + error)
        }
    },
    
    alterar(email, cpf, firstName, lastName) {
        try {
            const db = firebase.firestore()
            const user = firebase.auth().currentUser
            const docRef = db.collection('users').doc(user.uid);
    
            docRef.set({
                email: currentUser.email,
                cpf: cpf,
                firstName: firstName,
                lastName: lastName,
            })
            Alert.alert("Alterações feitas com succeso!","Foram alterados dados de"+ user.firstName)
        } catch (error) {
            console.log("erro com : " + error)
        }
    }
} 