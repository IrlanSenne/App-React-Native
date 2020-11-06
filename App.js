import React, { useState }  from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Button } from 'react-native';
import Estilos from './estilos/estilos.js';
import Lp from './listaPlana';

const imgBg1 = './assets/background.jpg'
const imgBg2 = './assets/background2.jpg'

 export default function App1(){    
  
     const [ligado,setLigado] = useState(true)

     return(       
       <View style={Estilos.container}>     
       <Button
         title={ligado?'Desligar':'Ligar'}
         onPress={()=>setLigado(!ligado)}
       />
     {ligado ?
       <ImageBackground source={require(imgBg1)} style={estilos.ImgFundo}>
            <View style={estilos.cont2}>
               <Lp/>
            </View>
         </ImageBackground>   :
         <ImageBackground source={require(imgBg2)} style={estilos.ImgFundo}>
            <View style={estilos.cont2}>
               <Lp/>
            </View>
         </ImageBackground> 
      }
        
       </View>
     )
   
 }

 const estilos = StyleSheet.create({
   logo:{
     width:'100%',
    resizeMode:'cover',
    marginTop:330
   },
   ImgFundo:{
     flex:1,
     resizeMode:'cover',
     width:'100%',
    
   },
   cont2:{
     padding:10,
     flex:1,
     justifyContent:'center',
   }
 }) 
