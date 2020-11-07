import React, { useState }  from 'react';
import { View,
        Switch,
        StyleSheet,
        ImageBackground,
        ActivityIndicator,
        StatusBar,
        Button  ,
        SafeAreaView
     } from 'react-native';
import Lp from './listaPlana';
import CxTx from './CaixaDeTexto';
import Toque from './toque';
import Modal from './Modal';

const imgBg1 = './assets/background.jpg'

 export default function App1(){    
  
     const [ligado,setLigado] = useState(true)
     const toggleLigado = ()=>setLigado(!ligado)
     const [barra,setBarra] = useState('blue')

     const mudarCorBarra= ()=>{
      setBarra('red')
     }


     return(       
       <View style={{flex: 1,backgroundColor:'#fff',padding:20, color:'#eee'}}>   
       {/* <ScrollView style={{backgroundColor:'#4155af',padding:20}}>   */}
      <Switch
        trackColor={{false:'#430000',true:'#00de00'}}
        thumbColor={ligado ? '#0f0' : '#f00'}
        value={ligado}
        onValueChange={toggleLigado}
      />
     {ligado ?
       <ImageBackground source={require(imgBg1)} style={estilos.ImgFundo}>
            <View style={estilos.cont2}>
               <Lp/>
            </View>
         </ImageBackground>   : <SafeAreaView
         barStyle='default'
         backgroundColor='rgba(45,150,78,0.3)'
         >
         
         <StatusBar
             backgroundColor={barra}
             barStyle='default'
             hidden={false}
             animated={true} 
             networkActivityIndicatorVisible={true}
             translucent={true}
             showHideTransition='fade'
         />
        <CxTx/>
        <ActivityIndicator size="large" color="#fe5de0" />
        <Toque/>
        <Modal/>
        <Button
          title='Mudar cor'
          onPress={mudarCorBarra}
        />

        </SafeAreaView>
      }
      {/* </ScrollView> */}
      
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
