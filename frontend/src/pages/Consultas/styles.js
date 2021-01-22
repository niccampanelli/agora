import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    backbutton: {
        marginLeft: -10,
        marginBottom: 10,
        width: 50,
        height: 40,
        marginTop:"10%"
    },

    header: {
        height: 50,
        paddingHorizontal:5,
        marginBottom: 50,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#555',
        marginStart:'5%',
        marginTop:"10%"
    },
    listaConsultasMarcadas:{
        marginTop:"5%",
        flexDirection:'row',
        borderBottomColor: '#000',
        borderWidth:1,
        justifyContent:'space-between',
        marginBottom: 1,
        marginStart:"2%",
        marginEnd:"2%",
        borderRadius:10,
        height:80,
        alignItems:'center'
    },
    consultasTitle: {
        fontSize: 24,
        marginBottom:10
    },
    consultasDate:{
        fontSize:20
    },
    btnAdd:{
        zIndex:1,
        end:"6%",
        position:'absolute',
        bottom:"5%",
        opacity:0.8,
        borderRadius:100,
        height:75,width:75,
        justifyContent:'center',
        alignItems:'center'
    }
});