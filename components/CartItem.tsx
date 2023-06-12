import { StyleSheet,Image, TouchableOpacity,Modal } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';
import Artist from './Artist';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const CartItem=()=>{
    const [total, setTotal] = useState("")

    const SetTotal=(value:string)=>{
        return setTotal(value)
    }
    

const SongCart=(props:{
    name:string,
    pricemp3:string,  
    duration:number,
    type:string,
    pricewave:string,
    pricestem:string,
    
})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState("Basic")
    console.log("Songs:" + props.name)
    return(
        <View style={{paddingBottom:40,borderBottomWidth:2,borderColor:"white",height:180,backgroundColor:"rgba(52, 52, 52, 0)"}}>
            
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:40,marginTop:240,backgroundColor:'#282828',height:140,width:310,borderRadius:50}}>
          <Text style={{color:'white',fontWeight:"800",fontSize:22,position:'absolute',top:20}}>Select Wave, Stem, MP3</Text>
         
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{
        setModalVisible(!modalVisible)
        setType("Basic")
      }}>
        <View style={{borderRadius:10,backgroundColor:'black',alignItems:"center",justifyContent:'center',height:30,width:70,position:'absolute',top:20,right:60}}>
        <Text style={{color:'white',fontWeight:"600",fontSize:20}}>
          Basic
        </Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{
        setModalVisible(!modalVisible)
        setType("Standard")
      }}>
        <View style={{borderRadius:10,backgroundColor:'black',alignItems:"center",justifyContent:'center',height:30,width:100,position:'absolute',top:20,}}>
        <Text style={{color:'white',fontWeight:"600",fontSize:20}}>
          Standard
        </Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center'}} onPress={()=>{
        
        setModalVisible(!modalVisible)
        setType("Pro")
      }}>
        <View style={{borderRadius:10,backgroundColor:'black',alignItems:"center",justifyContent:'center',height:30,width:70,position:'absolute',top:20,left:60}}>
        <Text style={{color:'white',fontWeight:"600",fontSize:20}}>
          Pro
        </Text>
        </View>
        
      </TouchableOpacity>
      </View>
      
        </View>
      </Modal>
            <TouchableOpacity style={{width:'100%',backgroundColor:"rgba(52, 52, 52, 0)"}}>
            <View style={{alignItems:"center",justifyContent:"center",margin:10,width:'100%',marginLeft:30,backgroundColor:"rgba(52, 52, 52, 0)"}}>
        <View style={{flexDirection:'row',width:'100%'}}>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <Image style={{height:70,width:70,borderRadius:8}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
            </View>
            <View>
    <View style={{alignItems:'center',justifyContent:"center"}}>
                <Text style={{color:'#CFCFCF',marginLeft:12,fontSize:16,fontWeight:"600"}}>
                {props.name.substring(0,22)}
                </Text>
            </View>
            <View style={{justifyContent:"flex-start"}}>
                <Text style={{marginTop:2,marginLeft:10,fontSize:14,color:'#A4A4A4',fontWeight:"600"}}>
                Track Length: {props.duration}
                </Text>
            </View>
            
            </View>
            <TouchableOpacity
            onPress={()=>{
                setModalVisible(true)
            }} style={{position:'absolute',right:50,top:10}}>
            <Ionicons name="options" size={30} color="white" />
            </TouchableOpacity>
            
            
            
            
            
            
        </View>
        <View style={{position:"absolute",top:90,width:'50%'}}>
        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:'#282828',padding:4,paddingLeft:10,paddingRight:10,borderRadius:4}}>
                <Text style={{fontSize:18,color:'#A4A4A4',fontWeight:"600",marginRight:4}}>
                {type}
                </Text>
                {
                type==="Basic" && (
                    <Text style={{marginLeft:12,fontSize:16,color:'#CFCFCF',fontWeight:"600",padding:4}}>
                Rs: {props.pricemp3}
                </Text>
                )
            }
            {
                type==="Standard" && (
                    <Text style={{marginLeft:12,fontSize:16,color:'#CFCFCF',fontWeight:"600",padding:4}}>
                Rs: {props.pricewave}
                </Text>
                )
            }
            {
                type==="Pro" && (
                    <Text style={{marginLeft:12,fontSize:16,color:'#CFCFCF',fontWeight:"600",padding:4}}>
                Rs: {props.pricestem}
                </Text>
                )
            }
            </View>
            
            
        </View>
        
        </View>
        </TouchableOpacity>
        </View>
        
        
    
    )
}

    return(
        <View style={{marginTop:30}}>
            <Artist name="nishank" ></Artist>
            <View style={{marginTop:12,height:1,backgroundColor:'#282828',width:"100%",marginBottom:4}}></View>
            <SongCart  name="Hip-Hop Beat" duration={2} pricemp3="1000" pricewave="2000" pricestem="3000" type="Wave"></SongCart>
           
            
        </View>
    )
}

export default CartItem
