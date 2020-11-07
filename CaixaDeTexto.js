import React, {useState} from 'react'
import {View,TextInput, Text} from 'react-native'

export default function(){

    const [nome,setNome] = useState('')

    return(
        <View>
      
            <Text style={{color:'#0202fa'}}>Digite seu texto</Text>
            <TextInput
                style={{borderWidth:1, borderColor:'#00f',color:'#00f'}}
                value={nome}
                onChangeText={text=>setNome(text)}
                multiline={false}
                autoCapitalize={'words'}
            />
            <Text style={{color:'#00f'}}> {nome}</Text>
            
        </View>
    )
}
