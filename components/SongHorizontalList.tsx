import { StyleSheet,ScrollView } from 'react-native';
import { Text, View } from './Themed';
import Album from './Album';
import albumCategories from '../data/albumCategories';
const album={
    id:'1',uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-cse.canva.com%2Fblob%2F978203%2F1600w-1Nr6gsUndKw.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Fcreate%2Falbum-covers%2F&tbnid=vsqFvvzesoV0LM&vet=12ahUKEwihtdH_5u77AhViArcAHW9vDH4QMygJegUIARD0AQ..i&docid=Ao47ZhdXa7pEBM&w=1600&h=1600&q=music%20cover%20art&ved=2ahUKEwihtdH_5u77AhViArcAHW9vDH4QMygJegUIARD0AQ',artists:'Maven, TVZ, Semmi On The Beat'
  }
export type ListProps ={
    title:String
}
const SongHorizontalList=(props:ListProps)=>{
  
    return(
    <View style={{marginTop:20,marginBottom:10,backgroundColor:"rgba(52, 52, 52, 0)"}}>
      <Text style={{fontSize:20,marginLeft:14,color:'#FE935F',fontWeight:'bold'}}>{props.title}</Text>
      <ScrollView
      style={{backgroundColor:"rgba(52, 52, 52, 0)"}}
      horizontal={true}>
      <View style={{flexDirection:'row',backgroundColor:"rgba(52, 52, 52, 0)"}}>
      <Album album={album}></Album>
      <Album album={album}></Album>
      <Album album={album}></Album>
      <Album album={album}></Album>
      <Album album={album}></Album>
      <Album album={album}></Album>
      <Album album={album}></Album>
    </View>
    </ScrollView>
    </View>
    )
    }

    export default SongHorizontalList
