import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:"5%",
    },
    headerTexto: {
        alignItems: 'flex-start',
        width: "70%",
        justifyContent: 'center',
    },
    voltar:{
        marginLeft: 5,
        width: 40,
        height: 40
    },
    info:{
        borderWidth:0.5,
        margin:"2%",
        flex:1,
        borderRadius:10,
        padding:"2%",
        flexWrap:'wrap'
    },
    blocoInfo:{
        flexDirection:'row',
        marginTop:"1%",
        padding:10,
        
    }
})