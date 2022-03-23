import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function Cadastro(){
    return(
        <View style={styles.container}>
            <Text style={styles.txtTop}>Create new Acount</Text>
            <TextInput
            style={styles.inputTxt}
            placeholder='Full Name'            />
            <TextInput
            style={styles.inputTxt}
            placeholder='E-mail Address'
            />
            <TextInput
            style={styles.inputTxt}
            placeholder='Phone Number'
            />
            <TextInput
            style={styles.inputTxt}
            placeholder='Password'
            />

           <TouchableOpacity style={styles.btnArea}>
               <Text style={styles.txtBtn}>Sign Up </Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    txtTop:{
        fontSize: 30,
        marginBottom: 20,
        color: '#F70707'
    },
    inputTxt:{
        width: '80%',
        height: 45,
        borderWidth: 2,
        borderColor: '#858383',
        borderRadius: 20,
        margin: 18,
        paddingLeft: 20,
    },
    btnArea:{
        width: '70%',
        height: 45,
        marginTop: 30,
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor: '#F34444',
        alignItems: 'center',
        justifyContent: 'center',
        },
        txtBtn:{
            color: '#fff',
            fontSize: 17,
        }


})

