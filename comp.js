import React  from 'react';
import { View, Text} from 'react-native';

 export default function(props){
   let nt = props.nota
     return(
     
         <Text>- {props.curso} - Nota: {nt}</Text>
  
     )
   }
 