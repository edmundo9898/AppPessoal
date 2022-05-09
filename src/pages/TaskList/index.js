import React, {useState, useEffect} from "react";
import{View, Text, TextInput, StyleSheet} from 'react-native';


export default function TaskList(props){

    return(
        <View style={styles.container}>
            <Text style={styles.txtList}>{props.data.nome}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height: 45,
        marginBottom: 10,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#F34444',
        alignItems: 'center',
        padding: 10,

    },
    txtList:{
        color: '#fff',
        fontSize: 18,

    }
})