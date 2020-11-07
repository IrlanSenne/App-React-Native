import React, {useState} from 'react';
import {View, Text,Modal, StyleSheet, Button} from 'react-native';

export default function(){

    const [click,setClick] = useState(false) 

    return(
        <View >
            <Modal
                animationType='fade'
                transparent={true}
                visible={click}
                style={{}}
            >   
            <View style={estilos.modal}>
                <Text style={estilos.textoModal}>Marinheiro</Text>
                <Text style={estilos.textoModal}>Here you can smile and cheer</Text>
                <Button
                    title={'Close'}
                    onPress={()=>setClick(false)}
            />
                </View>
            </Modal>
            <Button
                    title={'Welcome'}
                    onPress={()=>setClick(true)}
            />
           
        </View>
    )
}

const estilos = StyleSheet.create({
    modal:{
        backgroundColor:'#e445ea',
        margin:20,
        padding:15,
        borderRadius:20,
        elevation:10
    },
    textoModal:{
        color:'#fff',
        fontSize:15,
        padding:10,
        textAlign:'center'
    }
    
   

})