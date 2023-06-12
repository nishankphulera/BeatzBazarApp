import { StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';

export type ArtistProps= {
   name:string
    
}

const Artist=(props:ArtistProps)=>{
    return(
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:30,marginTop:10}}>
        <Image style={{height:50,width:50,borderRadius:10}} source={require("../assets/images/Alien.jpg")}></Image>
        <View>
         <Text style={{fontSize:18,color:"#CFCFCF",fontWeight:'600',marginLeft:20,bottom:10}}>{props.name}</Text>
          
        </View>
       
    </View>
    )
    
}

export default Artist