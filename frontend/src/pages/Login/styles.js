import { StyleSheet } from "react-native";

import {layer0Color,mainTextColor,mainAppColor} from '../../gstyles'


const styles = StyleSheet.create({

    container: {
        height: '100%',
      backgroundColor: layer0Color,

        paddingTop: 10,

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        fontSize: 25,
        fontWeight: 'bold',

     color: mainTextColor,

        marginBottom:'10%'
    },

    btnEntrar:{
        width:'60%',

        justifyContent:'center',
        alignItems:'center',

        borderWidth:1,
        borderRadius:5,

        marginTop:"5%"
    },

    cadOuEntrar:{
        marginTop:'20%',

        color:mainAppColor
    },


    input:{
        paddingLeft:"10%",
        marginBottom:'5%',

        borderRadius:5,
        borderWidth:1,
        
        width:"70%",
        
        
    }
})

export default styles