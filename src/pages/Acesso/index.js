import React, {useState} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    SafeAreaView, 
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../FirebaseApi/FirebaseConnection';

import TaskList from '../TaskList'


let tasks = [
    {key: '1', nome:'jogando video game'},
    {key: '2', nome:'Estudando javascript'}
]


export default function Acesso({route}){

     const [newtask, setnewTask] = useState('');

     const navigation = useNavigation();

     async function deslogar(){

        await firebase.auth().signOut();
        alert('Deslogado com sucesso!!')
        navigation.navigate('Login')
    }

      
    /* function testandoAdd(){
        alert('oi')
     }
     function testandoEdit(){
        alert('oi')
     }
    function testandoDelete(){
        alert('oi')
     }
 */

    

    return(
    
       <SafeAreaView style={styles.container}>
          <View style={styles.containerDeslog}>  
              <Text style={styles.txt}>TO-DO-LIST</Text>  
          </View>        
 
          <View style={styles.containerAdd}>

                <TextInput
                placeholder='Digite algo'
                style={styles.inputTxt}
                value={newtask}
                onChangeText={(text) => setnewTask(text)}
                />

                <TouchableOpacity style={styles.btnAdd}>
                   <Text style={styles.btnAddTxt}>+</Text>
                </TouchableOpacity>

           </View>   


           <View style={styles.containerFlastList}>
                <FlatList
                data={tasks}
                keyExtractor={ item => item.key}
                renderItem={ ({item}) => (
                    <TaskList data={item} />
                )}/>
            
           </View>
           

          


           <TouchableOpacity style={styles.btnAreaLog} onPress={deslogar}>
              <Text style={styles.btnTxtLog}>Deslogar</Text>
          </TouchableOpacity>   

       </SafeAreaView>

      
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
    },


    //Container do titulo toDoList
    containerDeslog:{
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: '#F34444',
        justifyContent: 'center',

    },
    
    txt:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',

    },

    //Container do textinput e do button para adicionar uma tarefa
    containerAdd:{
        flexDirection: 'row',
        marginTop: 15,
        paddingTop: 10,
    },
    inputTxt:{
       width: '80%',
       height: 45,
       borderWidth:2,
       borderColor: '#f34444',
       borderRadius: 20,
       padding: 10,
    },
    btnAdd: {
        marginLeft: 5,
        backgroundColor: '#f34444',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        borderRadius: 4,   
    },
    btnAddTxt:{
        color: '#fff',
        fontSize: 25,
    },

    // Container do flast List 
    containerFlastList:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 13,
    },


    // Button para deslogar
    btnAreaLog:{
        borderWidth: 0,
        backgroundColor: '#F34444',
        width: 300,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    btnTxtLog:{
        fontSize: 18,
        color: '#fff',
    },
    
   
})