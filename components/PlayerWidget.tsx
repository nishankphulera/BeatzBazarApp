import { StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
export type playerProps={
    name:string,
    by:string,
    uri:string,
    duration:number,
    img:string

}

const PlayerWidget=(props:playerProps)=>{
    const [play,setPlay] = useState(true)
    const [liked, setLiked] =useState(false)
    const [sound,setSound] = useState<Sound|null>(null)
    console.log("Songs:" + props.name)
    
    const playSongs = async(play:boolean)=>{
        if(sound){
            await sound.unloadAsync()
        }
        const {sound:newSound} = await Audio.Sound.createAsync(
           { uri: 'http://techslides.com/demos/samples/sample.mp3' },
  { shouldPlay: play }
            
        )
        setSound(newSound)
    }

   

    return(
        <TouchableOpacity style={{width:'100%'}}>
            <View style={{alignItems:"center",justifyContent:"center",margin:10,width:'100%'}}>
        <View style={{flexDirection:'row',width:'100%'}}>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <Image style={{height:60,width:60,borderRadius:8}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
            </View>
            <View style={{marginLeft:10,marginTop:10}}>
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
           
            </View>
            <View  style={{position:'absolute',right:80,top:20}}>
            <TouchableOpacity
            onPress={()=>{
                
                
                setLiked(true)
            }}
           >
            {
                liked ? (<AntDesign name="heart" size={24} color="red" />):(<AntDesign name="heart" size={24} color="#FE935F" />)
            }
              
            </TouchableOpacity>
            
            </View>
            
            <TouchableOpacity
            onPress={async()=>{
                setPlay(!play)
                await playSongs(play)
                    
                
            }}
            style={{position:'absolute',right:20,top:16}}>
                {
                    play ? (<Entypo name="controller-play" size={30} color="orange" />) :  (<AntDesign name="pause" size={30} color="orange" />) 
                }
              
            </TouchableOpacity>
            
            
        </View>
        </View>
        </TouchableOpacity>
        
    
    )
}

export default PlayerWidget