import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import firebase from '../FirebaseApi/FirebaseConnection';
import { useReducer } from 'react/cjs/react.production.min';


  


export default function Cadastro(){

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    
    async function cadastro(){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value) => {
           alert('Usuario criado com sucesso !:' + value.user.email);
           navigation.navigate('Login');
        })
        .catch((error) => {
            alert('Algo deu errado!!')
        })
        
        setName('');
        setEmail('');
        setPassword('');
    }
 


    return(

        <View style={styles.container}>
            <Text style={styles.txtTop}>Create new Acount</Text>
            <TextInput
            style={styles.inputTxt}
            placeholder='Name'
            value={name}      
            onChangeText={(texto) => setName(texto)}
            />

            <TextInput
            style={styles.inputTxt}
            placeholder='E-mail Address'
            value={email}      
            onChangeText={(texto) => setEmail(texto)}
            />

            <TextInput
            style={styles.inputTxt}
            placeholder='Password'
            secureTextEntry={true}
            value={password}      
            onChangeText={(texto) => setPassword(texto)}
            />


           <TouchableOpacity 
           style={styles.btnArea}
           onPress={cadastro}
           >
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

