
import { ScrollView, StyleSheet,ImageBackground,TextInput, TouchableOpacity,Text,Image} from 'react-native';
import { useState } from 'react';
import { RootTabScreenProps } from '../types';
import { View } from '../components/Themed';
export default function Signup({ navigation }: RootTabScreenProps<'Signup'>) {
    const [username, setUsername] = useState(String)
    const [password, setPassword] = useState(String)
    const [mobile, setMobile] = useState(String)
    const [email, setEmail] = useState(String)
    const [name, setName] = useState(String)
    return(
        <ImageBackground style={{flex:1,height:"100%",width:'100%',alignItems:"center",justifyContent:"center"}} source={require("../assets/images/signup.jpg")}>
            <ScrollView style={{width:"100%",marginLeft:50}}>
                
                <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:300,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={name}
            placeholderTextColor="grey"
        placeholder="name"
        keyboardType="default"
         onChangeText={(value)=>{setName(value)}}></TextInput>
         <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:30,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={mobile}
            placeholderTextColor="grey"
        placeholder="Phone Number"
        keyboardType="numeric"
         onChangeText={(value)=>{setMobile(value)}}></TextInput>
         <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:30,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={email}
            placeholderTextColor="grey"
        placeholder="Email"
        keyboardType="default"
         onChangeText={(value)=>{setEmail(value)}}></TextInput>
                <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:30,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={username}
            placeholderTextColor="grey"
        placeholder="Artistic Name"
        keyboardType="default"
         onChangeText={(value)=>{setUsername(value)}}></TextInput>
         <TextInput 
            style={{width:"86%",height:60,backgroundColor:"white",borderRadius:14,marginTop:30,fontSize:18,alignItems:"center",justifyContent:"center",padding:10}}
            value={password}
            placeholderTextColor="grey"
        placeholder="Password"
        keyboardType="default"
         onChangeText={(value)=>{setPassword(value)}}></TextInput>
         <TouchableOpacity onPress={()=>{
                navigation.navigate("Root")
            }} style={{borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:40,marginRight:50,marginBottom:40}}>
               <Image style={{height:40,width:120}} source={require("../assets/images/signupnew.png")} ></Image>
            </TouchableOpacity >
            </ScrollView>
        </ImageBackground>
    )
}