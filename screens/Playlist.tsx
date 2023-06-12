import { ScrollView, StyleSheet, TouchableOpacity,Modal,TextInput,ImageBackground} from 'react-native';
import { useState } from 'react';
import LikedSongs from '../components/LikedSongs';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 

export default function Playlist({ navigation }: RootTabScreenProps<'Playlist'>) {
   const [modalVisible, setModalVisible] = useState(false);
   const [playListName, setPlayListName] = useState("");
   const [noPlayListArray, setNoPlayListArray] = useState(["Liked Songs"])
   

   
   
   
return(
  <ImageBackground style={{height:'100%',width:'100%'}} >
  <ScrollView>
    
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:40,marginTop:120,backgroundColor:'white',height:240,width:310,borderRadius:50}}>
          <Text style={{color:'black',fontWeight:"800",fontSize:26,position:'absolute',top:20}}>Create Playlist</Text>
         <TextInput
        style={{backgroundColor:'#FE935F',borderRadius:10,padding:8,width:230,fontSize:16}}
        placeholderTextColor="black"
        onChangeText={(text)=>{
          setPlayListName(text)
        }}
        value={playListName}
        placeholder="Name of playlist"
        keyboardType="default"
      />
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{
        setModalVisible(false)
        setPlayListName("")
      }}>
        <View style={{borderRadius:10,backgroundColor:'#FE935F',alignItems:"center",justifyContent:'center',height:30,width:70,position:'absolute',top:30,right:20}}>
        <Text style={{color:'white',fontWeight:"600",fontSize:20}}>
          Close
        </Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{
        
         setNoPlayListArray([...noPlayListArray,playListName])
        setModalVisible(false)
      }}>
        <View style={{borderRadius:10,backgroundColor:'#FE935F',alignItems:"center",justifyContent:'center',height:30,width:70,position:'absolute',top:30,left:20}}>
        <Text style={{color:'white',fontWeight:"600",fontSize:20}}>
          Create
        </Text>
        </View>
        
      </TouchableOpacity>
      </View>
      
        </View>
      </Modal>
   
   
    <View style={{alignItems:"center",justifyContent:'center',backgroundColor:"#33363A",top:20,marginBottom:30,height:40,borderRadius:4,flexDirection:"row"}}>
      <Text style={{fontSize:20,color:'grey',position:'absolute'}}>My Playlist</Text>
      <TouchableOpacity
      onPress={()=>{
        setModalVisible(!modalVisible);
      }} style={{position:'absolute',right:20}}>
       <AntDesign name="plussquare" size={30} color="#FE935F" />
      </TouchableOpacity>
      </View>
    <View style={styles.container}>  
     
    {
      noPlayListArray.map((item,index)=>{
        return(
          <LikedSongs key={index} name={item} img="hello" noSongs="0"></LikedSongs>
        )
      })
    }
        
        
  </View>
   </ScrollView>
  </ImageBackground>
 
  
  
    
    
)
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    flexWrap:"wrap",
    flexDirection:"row",
    backgroundColor:"rgba(52, 52, 52, 0)"
    
    
    
    
  },
  
});
