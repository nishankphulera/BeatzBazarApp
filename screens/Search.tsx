import { StyleSheet,TextInput,ImageBackground } from 'react-native';
import {useState} from 'react'
import { Text, View } from '../components/Themed';
import {Ionicons} from '@expo/vector-icons';
export default function Search() {
  
  const [search,setSearch] = useState<string>()
  return (
    <ImageBackground  style={styles.container}>
      <View style={{
        alignItems:"center",
        justifyContent:'center',
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        backgroundColor:"rgba(52, 52, 52, 0)"
        
        
        
      }}>
        <Ionicons name="ios-search-circle" size={50} color="#FE935F" />
       <TextInput
        style={{
    height: 60,
    width:'84%',
    margin: 8,
    borderWidth: 1,
    paddingLeft:20,
    paddingBottom:2,
    borderRadius:22,
    backgroundColor:'white',
    fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    color:'#FE935F',
    elevation:40,
        shadowColor: '#F3C926',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.9,
        shadowRadius: 5,
    
  
  }}
        onChangeText={(inp)=>{
          setSearch(inp)
        }}
        value={search}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor="grey"
        selectionColor="#FE935F"
        textAlign='left'
        
        
        
      />
      </View>
      
      
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
