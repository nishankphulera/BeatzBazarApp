/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,Entypo,Ionicons,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable,Image,View,Text} from 'react-native';
import SongsList from '../screens/SongsList';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Playlist from '../screens/Playlist';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Cart from '../screens/Cart';
import Player from '../screens/Player';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Signup from '../screens/Signup'
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        
      
      <Stack.Screen name="SongsList" component={SongsList} options={{
        title:"",
        
      }} />
      <Stack.Screen name="Player" component={Player} options={{
        title:"",
        
      }} />
      <Stack.Screen name="Login" component={Login} options={{
        title:"",
        
      }} />
      <Stack.Screen name="Signup" component={Signup} options={{
        title:"",
        
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
    </View>
    
  );
}


// function CustomNavigator() {
//   return (
//     <Stack.Navigator>
      
//         <Stack.Screen name="Songs" component={Songs} />
      
//     </Stack.Navigator>
//   );
// }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    
      <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="ios-home" size={24} color="#FE935F" />,
          headerLeft:()=>(
            <Image
            style={{height:50,width:100,marginLeft:4}}
            source={require("../assets/images/beatzbazar.png")}/>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons name="face-man-profile" size={34} color="#FE935F" />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={({  }: RootTabScreenProps<'Search'>) => ({
          title: "",
          tabBarIcon: ({ color }) => <Ionicons name="ios-search-circle" size={30} color="#FE935F" />,
})}
      />
      <BottomTab.Screen
        name="Playlist"
        component={Playlist}
        options={({  }: RootTabScreenProps<'Playlist'>) => ({
          title: "",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-music" size={30} color="#FE935F" />,
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
         title:"", 
         headerLeft:()=>(
          <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'center'}}>
            <Image
            style={{height:40,width:40,marginTop:4,position:'absolute',left:20}}
            source={require("../assets/images/alienCartFinal.png")}/>
            <Text style={{marginLeft:"30%",color:'white',fontSize:24,fontWeight:"800"}}>Your Cart </Text>
          </View>
             
          ),
          headerStyle:{backgroundColor:'black'},
          tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={24} color="#FE935F" />,
        }}
      />
      </BottomTab.Navigator>
      
      
      
      
    
    
    
  );
}



