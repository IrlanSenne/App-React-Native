import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Comp from './comp'
import Estilos from './estilos/estilos.js';
import Caixas from './Caixas.js'

const fexibir = (vp1)=>{
  if(vp1){
    return(<Text>Curso de React Native</Text>)
  }else{
    return(<Text>-- -- --</Text>)
  }
}

 export default class App1 extends Component{
  
   render(){
     let exibir  = true
     return(
       
       <View style={Estilos.container}>
       <Caixas exibir={exibir}/>
       <Comp curso={'Curso React Native'}  nota={"10"}/>
       <Comp curso={'Curso C#'} nota={"07"}/>
       <Comp curso={'Curso Javascript'} nota={"05"}/>
       <Comp curso={'Curso Java'} nota={"08"} />
         <Text style={Estilos.textoTitulo}>Texto vermelho e fonte 20</Text>
         {fexibir(exibir)}
       </View>
     )
   }
 }
