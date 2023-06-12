import { ScrollView, StyleSheet,ImageBackground,TextInput, TouchableOpacity,Text,Image} from 'react-native';
import { RootTabScreenProps } from '../types';
import { View } from '../components/Themed';
export default function Landing({ navigation }: RootTabScreenProps<'Landing'>) {
    return(
        <ImageBackground style={{flex:1,height:"100%",width:'100%',alignItems:"center",justifyContent:"center"}} source={require("../assets/images/background.jpg")}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Login")
            }} style={{elevation:10,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:400}}>
               <Image style={{height:40,width:120}} source={require("../assets/images/login.png")} ></Image>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Signup")
            }}  style={{elevation:10,marginTop:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
               <Image style={{height:40,width:120}} source={require("../assets/images/signupnew.png")} ></Image>
            </TouchableOpacity>
        </ImageBackground>
    )
}

//  <TextInput style={{height:"100%",width:'100%',marginLeft:20,fontSize:18}} placeholderTextColor="white" placeholder="Write"></TextInput>