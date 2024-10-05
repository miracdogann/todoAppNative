import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from './ToDoCard.style';



const ToDoCard = ({text , completed , onPress}) =>{
    return(
        <TouchableOpacity 
            style = {[styles.container,completed && styles.completed]} onPress={onPress}
        >
            <Text style = {[styles.todo_text , completed && styles.completedText]}>
                {text}
            </Text>

        </TouchableOpacity>
    )
}

export default ToDoCard;









