import React from "react";
import { StyleSheet } from 'react-native'
import { lightTextColor, mainAppColor, mainTextColor } from "../../../gstyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginHorizontal: '3%',
    },
    containerHosp: {
        height: "20%",
        padding: "5%"
    },
    InfoKeys: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    blocoInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    picker: {
        width: '55%',
        height: "100%",
        borderWidth: 1,
        borderColor: lightTextColor,
        borderRadius: 8,
        paddingLeft: 10,
    },
    containerPicker: {
        flexDirection: 'row',
        marginBottom: "2.5%",
        justifyContent: 'space-between',
        height: "7%",
        padding: 1
    },
    btn: {
        backgroundColor: mainAppColor,
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center'
    },
    modalMedicos: {
        flex:1,
        marginTop:'5%',
        padding: 18,
        zIndex:9
    },
    btnModalMedico:{
        width:'100%',
        justifyContent:'center',
        marginBottom:'5%',
        borderRadius:10,
        borderColor:lightTextColor,
        borderWidth:1,
        padding:'5%'
        
    }
})

export default styles