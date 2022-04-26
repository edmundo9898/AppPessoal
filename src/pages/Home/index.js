import React from 'react-native';
import{View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();
    function navegarLogin(){
        navigation.navigate('Login')
    }

    function navegarCadastro(){
        navigation.navigate('Cadastro')
    }
    
    return(
        <View style={styles.container}>
           
            <Text style={styles.textPage}> Welcome to EdAppS </Text>

            <TouchableOpacity 
                style={[styles.btnArea, 
                {backgroundColor: '#D60E00', 
                marginBottom: 15,
                marginTop: 50}]}   
                onPress={navegarLogin}>

               <Text style={[styles.textL, {color: '#fff'}]}>Sign In</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
            style={styles.btnArea} 
            onPress={navegarCadastro}>

               <Text style={styles.textL}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.rodape}>
                <Text style={styles.rodapeNome}>Desenvolvido por : Edmundo Roberto</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center' , 
        backgroundColor: '#fff',
        marginTop: 30,

    },
    textPage:{
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',



    },
    btnArea:{
        borderWidth: 2,
        width: '70%',
        margin: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D60E00',
    },
    textL:{
        color: 'black',
        fontSize: 20,
    },
    rodape:{
        width: '90%',
        height: 80,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rodapeNome:{
        color: 'black',
        fontSize: 20,
    }
   
})