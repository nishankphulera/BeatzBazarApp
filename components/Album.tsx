import { StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';


export type AlbumProps= {
    album:{
        id:string,
uri:string,
artists:string
    }

}
const Album=(props:AlbumProps)=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        style={{margin:5}}
        onPress={()=>{
            console.log("pressed album")
           navigation.navigate("SongsList",{
            name:"Nishank",
by:"string",
likes:"10",
purchased:"3",
image:"string",
price:"$10"
           })
// ,{name:"Narrow Road",
// by:"NLE Choppa",
// likes:"100k",
// purchased:"558",
// image:"string"}
        }}
        >
        <View style={{alignItems:'center',justifyContent:"center",width:130,margin:14,backgroundColor:'rgba(52, 52, 52, 0)'}}>
            <Image style={{height:140,width:140,}} source={require("../assets/images/Cyberpunk.jpg")}></Image>
            <Text style={{marginTop:8,width:130,textAlign:'center'}}>{props.album.artists}</Text>
        </View>      
        </TouchableOpacity>
    )
    }

    export default Album
