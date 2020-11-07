import React, {useState} from 'react'
import {View, Text, TouchableHighlight, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

export default function(){

    const [cont,setCont]=useState(0)
    const contar = ()=> setCont(cont + 1)

    return(
        <View>
            <TouchableHighlight
            style={estilos.botao}
            onPress={contar}
            underlayColor='#fe344a'
            >
                <Text>Contar</Text>
            </TouchableHighlight>
            <TouchableOpacity
            style={estilos.botao}
            onPress={contar}
            underlayColor='#fe344a'
            >
                <Text>Contar</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback
            style={estilos.botao}
            onPress={contar}
            underlayColor='#fe344a'
            >
                <Text>Contar</Text>
            </TouchableWithoutFeedback>
                <Text>{cont}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        alignItems:'center',
        backgroundColor:'#ede',
        color:'#fff',
        padding:15
    }
})