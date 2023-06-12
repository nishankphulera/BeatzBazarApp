import { AntDesign, Entypo } from '@expo/vector-icons';
import { StyleSheet,Image,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Songs from '../components/Songs';


export default function SongsList({ navigation,route }: RootStackScreenProps<'SongsList'>) {

  const songData =[
    {
      id:"1",
      name:"Sick Beat",
      by:"Maven Music",
      duration:3,
      price:{
        mp3:"10",
        wave:"20",
        stem:"30"
      }
    },
    {
      id:"2",
      name:"Rich Flex Type Beat",
      by:"TvZ Music",
      duration:3,
      price:{
        mp3:"10",
        wave:"20",
        stem:"30"
      }
    }
    ,
    {
      id:"3",
      name:"kendrick Lamar Type Beat",
      by:"TvZ Music",
      duration:3,
      price:{
        mp3:"10",
        wave:"20",
        stem:"30"
      }
    }
    ,
    {
      id:"4",
      name:"Melloy Beat",
      by:"TvZ Music",
      duration:3,
      price:{
        mp3:"10",
        wave:"20",
        stem:"30"
      }
    }
  ]
    
  

  

  return(
   <View style={{height:'100%',alignItems:"center"}}>
    <Image style={{height:'40%',width:'90%',borderRadius:8,marginBottom:10}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
      
      
      <FlatList
      style={{marginTop:20,width:'94%'}}
     data={songData}
     renderItem={({item})=>
      <Songs  name={item.name} duration={item.duration} by={item.by} price={item.price.mp3}></Songs>
     }
     keyExtractor={(item)=>
     item.id
     }
     ></FlatList>
   </View>
      
      
      
    
     
    // 
    
    
  );
}
