import {Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, PanResponder} from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { EffectCallback, useEffect, useState } from 'react';
import { RootStackScreenProps } from '../types';
import PlayerWidget from '../components/PlayerWidget';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import ProgressBar from '../components/ProgressBar';
import * as Progress from 'react-native-progress';
export type playerProps={
    name:string,
    liked:boolean,
    image:string,
    duration:number,
    uri:string
}

export default function Player({ navigation,route }: RootStackScreenProps<'Player'>) {
    const [play,setPlay] = useState(true)
    const [sound,setSound] = useState<Sound>()
    const [duration, setDuration] = useState<number>(0)
    const [position, setPosition] = useState<number>(0)
     const [progress, setProgress] = useState(0.5);
    useEffect(()=>{
        
        playSongs()
        return sound ? ()=>{
            sound.unloadAsync()
        }:()=>{undefined}
    },[])
    
    
    
        
        
    
    const playPauseSong = async()=>{
         
        console.log("Hi")
        if(!sound)
        {
            return;
        }
        if(play)
        {
          await sound.stopAsync()
        }
        else{
            await sound.playAsync()
        }
    }
    const updatePlayingStatus= async(status)=>{
       status 
            setPlay(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
        // console.log(status)
        
        
        
    }

    const incrementPlayback = async()=>{
        console.log("hello")
        if(sound)
        {
            await sound.playFromPositionAsync(position+10000)
        }
    }
    const decrementPlayback = async()=>{
        console.log("hello")
        if(sound)
        {
            await sound.playFromPositionAsync(position-10000)
        }
    }
    const playSongs = async()=>{
        if(sound){
            await sound.unloadAsync()
        }
        const {sound:newSound} = await Audio.Sound.createAsync(
           { uri: 'https://beatsbazar.s3.ap-south-1.amazonaws.com/lifelike-126735.mp3' },
  { shouldPlay: play },
            updatePlayingStatus
        )
        setSound(newSound)
        
    }

    const getProgress=()=>{
       
        if(sound===null || duration===0 || position===0 || duration==undefined)
        {
            // setProgress(0)
            return 0
        }
        if(!isNaN(position/duration))
       return (position/duration)
        //     duration!==null && position!==null && console.log((position/duration))
        // duration!==null && position!==null && setProgress((position/duration)) ;
        
         
        
        } 

        const handleSeek = async(newProgress: number) => {
    const seekPosition = newProgress * duration;
    if(sound)
    await sound.setPositionAsync(seekPosition);
    setPosition(seekPosition);
  }

    return(
         <View style={{alignItems:"center",justifyContent:"center",flex:1,marginBottom:30}}>
            <View  style={{alignItems:"center",justifyContent:"flex-start",flex:1,marginBottom:30}}>
            <Image style={{height:360,width:360,justifyContent:"center",borderRadius:20}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
            </View>
            
                
                <ProgressBar progress={getProgress()} onSeek={setProgress} />
                {/* <Progress.Bar color='orange' borderColor='black' progress={getProgress()} width={340} /> */}
           
            
            
            
            
           
            <View style={{flexDirection:"row",bottom:100}}>
                <TouchableOpacity  style={{right:60}}>
                <AntDesign name="heart" size={30} color="#FE935F" />
            </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    decrementPlayback()
                }}  style={{right:30}}>
                <AntDesign name="stepbackward" size={30} color="#FE935F" />
            </TouchableOpacity>
                 
                     <TouchableOpacity  style={{bottom:10}} onPress={()=>{
                    playPauseSong() 
                }}>
                    <FontAwesome name={play? 'pause':'play'} size={60} color="#FE935F" />
                </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                incrementPlayback()
            }} style={{left:20}}>
                <AntDesign name="stepforward" size={30} color="#FE935F" />
            </TouchableOpacity>
            <TouchableOpacity style={{left:60}}>
                <Entypo name="shopping-cart" size={30} color="#FE935F" />
            </TouchableOpacity>

            
                   
                
            </View>
       
    </View>
    )
   
}

const style = StyleSheet.create({
    progress:{
        
    }
})

 {/* <PlayerWidget name="Sick beat"
    by="Maven" 
    duration={3}
    img="hello"
    uri="hello"
    ></PlayerWidget> */}