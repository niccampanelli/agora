const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

const firebase = require('firebase');
const admin = require('firebase-admin');

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

admin.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 5000,()=>console.log("Rodando na 3333"));