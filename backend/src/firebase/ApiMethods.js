import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function cadastrar(email, password, cpf, firstName, lastName) {

    /* Faz um doc na collection users e seta os parametros em um array */

    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
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
}

export async function login(email, password) {

    /**
     * Loga o usuario, da pra fazer as consultas 
     */

    try{
        await firebase.auth().signInWithEmailAndPassword(email, password);
        let user = firebase.auth().currentUser;
        Alert.alert("Login no AGORA", 'Login realizado com succeso!');
        return user;

    } catch (err) {
        Alert.alert("Algo saiu errado com:", err.message);
    }
}

export async function loggingOut() {
    try{
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert('Algo deu errado com:', err.message);
    }
}
export async function consulta(email) {
    try {
        const db = firebase.firestore()
        const user = firebase.auth().currentUser
        const select = await db.collection('users').get(user.id);

        select.forEach((doc) => {
            //  console.log(doc.id, '=>', doc.data().firstName);
            Alert.alert("Logado como:" + doc.firstName);

        });
    } catch (error) {
        console.log("erro com:" + error)
    }
}

export async function alterar(email, cpf, firstName, lastName) {
    try {
        const db = firebase.firestore()
        const user = firebase.auth().currentUser
        const docRef = db.collection('users').doc(user.uid);

        await docRef.set({
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