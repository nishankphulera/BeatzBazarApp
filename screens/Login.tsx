import { ScrollView, StyleSheet,ImageBackground,TextInput, TouchableOpacity,Text,Image} from 'react-native';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import { View } from '../components/Themed';
export default function Login({ navigation }: RootTabScreenProps<'Login'>) {
    const [username, setUsername] = useState(String)
    const [password, setPassword] = useState(String)
    return(
        <ImageBackground style={{flex:1,height:"100%",width:'100%',alignItems:"center",justifyContent:"center"}} source={require("../assets/images/login.jpg")}>
            <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:400,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={username}
            placeholderTextColor="grey"
        placeholder="Username"
        keyboardType="default"
         onChangeText={(value)=>{setUsername(value)}}></TextInput>
         <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:20,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={password}
            placeholderTextColor="grey"
        placeholder="Password"
        keyboardType="default"
         onChangeText={(value)=>{setPassword(value)}}></TextInput>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Root")
            }} style={{elevation:10,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:40}}>
               <Image style={{height:40,width:120}} source={require("../assets/images/login.png")} ></Image>
            </TouchableOpacity >
        </ImageBackground>
    )
}