import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Carousel from '../Components/Carousel';

export default StyleSheet.create({

    backbutton: {
        marginLeft: -10,
        marginBottom: 10,
        width: 50,
        height: 40
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
        marginStart:'5%'
    },
    listaConsultasMarcadas:{
        marginTop:"10%",
    },
    consultasList:{
        
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 20,

    },
    consultasTitle: {
        fontSize: 24,
    },
    consultasDate:{
        fontSize:20
    }
});