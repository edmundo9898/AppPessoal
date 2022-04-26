import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';

import firebase from '../FirebaseApi/FirebaseConnection';
import { useNavigation } from '@react-navigation/native';


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    
    async function logando(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (value) => {
            navigation.navigate('Acesso', {user: value.user.email});
        
        })
        .catch( (erro) => {
            alert('Algo deu errado !!');
            return;
        })

        setEmail('');
        setPassword('');

    }

    async function cadastrar(){
        navigation.navigate('Cadastro')
    }



    return(
        <View style={styles.container}>
             
            <Text style={styles.topTxt}>
                Sign In
            </Text>

            <TextInput
            style={styles.inputTxt}
            value={email}
            onChangeText={(texto) => setEmail(texto)}
            placeholder='E-mail'
            />

             <TextInput
            style={[styles.inputTxt, {marginBottom: 40,}]}
            placeholder='Password'
            value={password}
            onChangeText={(texto) => setPassword(texto)}
            secureTextEntry={true}
            />

            <TouchableOpacity 
            onPress={logando} 
            style={[styles.btnArea, 
            {backgroundColor: '#F34444',
            }]}>
                <Text style={styles.txtbtn}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={cadastrar}
             style={[styles.btnArea, 
             {marginTop: 20, 
             backgroundColor: '#009933',
             }]}>
                 
                <Text style={styles.txtbtn}>Cadastrar</Text>
            </TouchableOpacity>
               
             
            
            
        </View>

        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
        
    },
    topTxt:{
        color: '#F70707',
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold',
        
    },
    inputTxt:{
        borderWidth: 2,
        borderColor: '#858383',
        width: '80%',
        height: 45,
        borderRadius: 20,
        margin: 18,
        paddingLeft: 20,
    },

    btnArea:{
        width: '80%',
        height: 45,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
       },
       txtbtn:{
           color: '#fff',
           fontSize: 19,
       }
})