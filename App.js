import React, {useState}  from 'react';
import { View, StyleSheet, Text, TouchableHighlight, SafeAreaView, TextInput} from 'react-native';


export default function calcimc(){

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  const calcImc = ()=>{
    if(peso == 0 || !peso) {
      alert('Informe o peso')

      return
    } 
    if(altura == 0 || !altura) {
      alert('Informe a altura')
      return
    } 

    const r=peso / (Math.pow(altura,2))
    setResultado(r.toFixed(1))
  }
  

  return(
    <SafeAreaView style={estilos.corpo}>
    <View style={estilos.bloco}>
      <Text>Calculadora de IMC</Text>
    </View>
      <View style={estilos.bloco}>
      <Text>Informe seu peso: </Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          value={peso}
          onChangeText={text=>setPeso(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
      <Text>Informe sua altura: </Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          value={altura}
          onChangeText={text=>setAltura(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
      <TouchableHighlight
          onPress={calcImc}
          style={estilos.btnCalc}
      >
        <Text style={estilos.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
      </View>
      <View style={estilos.bloco}>     
        <Text>Resultado: {resultado}</Text>     
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  btnCalc:{
    backgroundColor:'#e00',
    justifyContent:'center',
    alignItems:'center',
    padding:10 ,
    borderRadius:10
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#eee'
  },
  bloco:{
    marginBottom:20
  },
  corpo:{
    padding:5
  },
  txt:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
    margin:10
  }
})