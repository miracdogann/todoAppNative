import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#7DA453',
        margin:10,
        padding:10,
        borderRadius:15,
    },
    completed : {
        backgroundColor :'#B0BEC5',
    },

    todo_text:{
        color:'#ffffff',
        fontSize:18
    },
    completedText : {
        textDecorationLine : 'line-through', // üstü çizgili metin
        color :'#757575'

    }
})


