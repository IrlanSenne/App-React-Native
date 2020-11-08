import React, { useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { View, StyleSheet, Text, Button} from 'react-native';


const Pilha = createStackNavigator();

function Vinhos({navigation}){
  return(
    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
    <Text>Vinhos</Text>
    <Button
      title='Ver sobremesas'
      onPress={()=>navigation.navigate('Sobremesa')}
    />
      
    </View>

  )
}

function Sobremesa({navigation}){
  return(
    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
    <Text>Sobremesa</Text>
    <Button
      title='Ver lista de vinhos'
      onPress={()=>navigation.navigate('Vinhos')}
    />
    </View>


  )
}

 function App1(){    
  
     return(       
    //    <View style={{flex: 1,backgroundColor:'#fff',padding:20, color:'#eee'}}>   
    //    {/* <ScrollView style={{backgroundColor:'#4155af',padding:20}}>   */}
    //   <Switch
    //     trackColor={{false:'#430000',true:'#00de00'}}
    //     thumbColor={ligado ? '#0f0' : '#f00'}
    //     value={ligado}
    //     onValueChange={toggleLigado}
    //   />
    //  {ligado ?
    //    <ImageBackground source={require(imgBg1)} style={estilos.ImgFundo}>
    //         <View style={estilos.cont2}>
    //            <Lp/>
    //         </View>
    //      </ImageBackground>   : <SafeAreaView
    //      barStyle='default'
    //      backgroundColor='rgba(45,150,78,0.3)'
    //      >
         
    //      <StatusBar
    //          backgroundColor={barra}
    //          barStyle='default'
    //          hidden={false}
    //          animated={true} 
    //          networkActivityIndicatorVisible={true}
    //          translucent={true}
    //          showHideTransition='fade'
    //      />
    //     <CxTx/>
    //     <ActivityIndicator size="large" color="#fe5de0" />
    //     <Toque/>
    //     <Modal/>
    //     <Button
    //       title='Mudar cor'
    //       onPress={mudarCorBarra}
    //     />

    //     </SafeAreaView>
    //   }
    //   {/* </ScrollView> */}
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name='Vinhos'
          component={Vinhos}
         
        />
          <Pilha.Screen
          name='Sobremesa'
          component={Sobremesa}
          
        />
      </Pilha.Navigator>
    </NavigationContainer>
    
     )
   
 }
 export default App1
  
