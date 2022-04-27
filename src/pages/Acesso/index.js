import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../FirebaseApi/FirebaseConnection';


export default function Acesso({route}){

     const navigation = useNavigation();

   async function deslogar(){

        await firebase.auth().signOut();
        alert('Deslogado com sucesso!!')
        navigation.navigate('Login')

    }

    return(

       <View style={styles.container}>
           <Text style={styles.txt}>Char Logado: {route.params?.user}</Text>
           
           <TouchableOpacity
           style={styles.btnArea}
           onPress={deslogar}
           >
             <Text style={styles.txtBtn}>Deslogar</Text>
           </TouchableOpacity>
                  
       </View>

      
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30,
        paddingTop: 30,
        padding: 10,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
    },
    txt:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 50,

    },
    btnArea:{
        borderWidth: 0,
        height: 40,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33cc00'
    },
    txtBtn:{
        color: '#fff',
        fontSize: 18,
    }
})