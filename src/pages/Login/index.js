import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';


export default function Login(){




    return(
        <View style={styles.container}>
             
            <Text style={styles.topTxt}>
                Sign In
            </Text>

            <TextInput
            style={styles.inputTxt}
            placeholder='E-mail or Phone Number'
            />
             <TextInput
            style={[styles.inputTxt, {marginBottom: 40,}]}
            placeholder='Password'
            />

            <TouchableOpacity style={[styles.btnArea, {backgroundColor: '#F34444'}]}>
                <Text style={styles.txtbtn}>Log in</Text>
            </TouchableOpacity>
                
            <Text style={styles.orTxt}>OR</Text>
               
            <TouchableOpacity style={[styles.btnArea, {backgroundColor: '#3b5998', marginBottom: 20,}]}>
                <Text style={styles.txtbtn}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnArea, {backgroundColor: '#db4a39'}]}>
                <Text style={styles.txtbtn}>Login with Google</Text>
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
    orTxt:{
        fontSize: 18,
        margin: 30,
        marginBottom: 45,
        fontWeight: 'bold',
    },
    btnArea:{
        width: '70%',
        height: 45,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
       },
       txtbtn:{
           color: '#fff',
           fontSize: 17,
       }
})