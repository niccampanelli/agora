import React from "react";
import { StyleSheet } from 'react-native'
import { mainAppColor, mainTextColor } from "../../../gstyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        marginHorizontal:'3%',
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
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
    },
    picker: {
        width: '55%',
        height: '100%',
        borderRadius: 10,
        elevation:1,
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
        borderRadius:10,
        alignItems:'center'
    }
})

export default styles