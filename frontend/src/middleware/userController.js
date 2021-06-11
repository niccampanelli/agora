import firebase from 'firebase';
import { Alert } from 'react-native';
import 'firebase/auth';





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

    logar(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }, 

    async logOut(props) {
        try {
            await firebase.auth().signOut()
            Alert.alert("Deslogado", 'Use Sempre e recomende o AGORA para outras pessoas!')
        } catch (err) {
            Alert.alert('Ocorreu um erro com: ', err.message);
        }
    },

    async deletar(){
        try{
            const user = await firebase.auth().currentUser;
            return user.delete();
        } catch(error){
            console.error(error);
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

    setUserData(changed, email){
        if(changed === 'email'){
            return firebase.auth().currentUser.updateEmail(email);
        }
        else if(changed === 'password'){
            return firebase.auth().sendPasswordResetEmail();
        }
        else if(changed === 'emailpassword'){
            firebase.auth().currentUser.updateEmail(email).then(() => {
                return firebase.auth().sendPasswordResetEmail();
            });
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