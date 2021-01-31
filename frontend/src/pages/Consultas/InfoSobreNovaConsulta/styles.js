import React from "react";
import { StyleSheet } from 'react-native'
import { mainAppColor, mainTextColor } from "../../../gstyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "3%",
    },
    containerHosp: {
        height: "20%",
        borderBottomWidth: 1.5,
        borderBottomColor: mainAppColor,
        padding: "5%"
    },
    InfoKeys: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    blocoInfo: {
        flexDirection: 'row',
        padding: 10,
    },
    picker: {
        borderWidth: 1,
        width: '55%',
        height: '100%',
        borderRadius: 10,
        borderColor:mainAppColor,
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