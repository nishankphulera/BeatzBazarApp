import { StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState } from 'react';

export type songsProps={
    name:string,
    by:string,
    price:string,
    duration:number,
    

}

const Songs=(props:songsProps)=>{
      const navigation = useNavigation();
    const [likes, setLikes] = useState(100)
    const [liked, setLiked] =useState(false)
    console.log("Songs:" + props.name)
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate("Player",{
    name:"Sick Beat",     
    liked:true,
    image:"string",
    duration:3,
    uri:"string"

        })}} style={{width:'100%'}}>
            <View style={{alignItems:"center",justifyContent:"center",margin:10,width:'100%'}}>
        <View style={{flexDirection:'row',width:'100%'}}>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <Image style={{height:80,width:80,borderRadius:8}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
            </View>
            <View>
    <View style={{alignItems:'center',justifyContent:"center"}}>
                <Text style={{marginLeft:12,fontSize:16,fontWeight:"600"}}>
                {props.name.substring(0,22)}
                </Text>
            </View>
            <View style={{justifyContent:"flex-start"}}>
                <Text style={{marginLeft:12,marginTop:1,fontSize:16,color:'#818181',fontWeight:"600"}}>
                {props.by}
                </Text>
            </View>
            <View style={{justifyContent:"flex-start"}}>
                <Text style={{marginTop:2,marginLeft:12,fontSize:14,color:'#FE935F',fontWeight:"600"}}>
                {props.price}
                </Text>
            </View>
            </View>
            <View  style={{position:'absolute',right:60,top:20}}>
            <TouchableOpacity
            onPress={()=>{
                
                !liked && setLikes(likes+1)
                setLiked(true)
            }}
           >
            {
                liked ? (<AntDesign name="heart" size={24} color="red" />):(<AntDesign name="heart" size={24} color="#FE935F" />)
            }
              
            </TouchableOpacity>
            <Text style={{margin:4,fontSize:10,color:'#FE935F',fontWeight:"600"}}>{likes}</Text>
            </View>
            
            <TouchableOpacity
            style={{position:'absolute',right:10,top:20}}>
              <Entypo name="shopping-cart" size={25} color="#FE935F" />
            </TouchableOpacity>
            
            
        </View>
        </View>
        </TouchableOpacity>
        
    
    )
}

export default Songs