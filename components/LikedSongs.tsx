import { StyleSheet,Image,Text, TouchableOpacity } from 'react-native';
import { View } from './Themed';
import { AntDesign } from '@expo/vector-icons';

export type playlistData={
  name:string,
  img:string,
  noSongs:string
}

const LikedSongs=(props:playlistData)=>{
return(
     <View style={styles.container}>
      <TouchableOpacity>
        <View style={{borderRadius:10,backgroundColor:"rgba(52, 52, 52, 0)"}}>
         <Image style={{height:100,width:100,borderRadius:30}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
      <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"rgba(52, 52, 52, 0)"}}>
      <Text style={{fontSize:16,color:'white',marginTop:10}}>{props.noSongs} Songs</Text>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"rgba(52, 52, 52, 0)"}}>
        {
          props.name=="" ? (<Text style={{fontSize:16,color:'white',marginTop:8,fontWeight:"bold"}}>{props.name}</Text>):(<Text style={{fontSize:16,color:'white',marginTop:8,fontWeight:"600"}}>Liked Songs</Text>)
        }
      
      </View>
      
        </View>
      </TouchableOpacity>
      
      </View>
      
)
}
const styles = StyleSheet.create({
  container: {
    padding:20,
    justifyContent:'center',
    alignItems:"center",
    width:'50%',
    backgroundColor:"rgba(52, 52, 52, 0)"
    
    
   


  },
 
});

export default LikedSongs