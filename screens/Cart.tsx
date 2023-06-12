import { ScrollView, StyleSheet, Touchable, TouchableOpacity,ImageBackground} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';
export default function Cart({ navigation }: RootTabScreenProps<'Cart'>) {
    const [price, setPrice] = useState(0)
    const [enable,setEnable] = useState(false)
    useEffect(()=>{
        price===0 ? setEnable(true) : setEnable(false)
    },[])
    return(
        <ScrollView>
             <ImageBackground  style={{height:'100%',flex:1}}>
           <CartItem></CartItem>
           <CartItem></CartItem>
          
            <View style={{flexDirection:'row',margin:20,marginTop:60,marginBottom:60}}>
                <Text style={{fontSize:18,left:10,position:"absolute"}}>Total</Text>
                <Text style={{fontSize:18,right:10,position:"absolute"}}>Rs.{price}</Text>
            </View>
            <TouchableOpacity onPress={()=>{
                console.log("hello")
            }} disabled={enable}  style={{bottom:30,backgroundColor:'grey',margin:20,alignItems:'center',justifyContent:'center',height:50,width:'94%',borderRadius:10}}>
            
               
                <Text style={{fontSize:20,fontWeight:'600'}}>Checkout</Text>
            
            </TouchableOpacity>
            
        </ImageBackground>
        </ScrollView>
       
    )
}