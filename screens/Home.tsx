import { ScrollView, StyleSheet,ImageBackground} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SongHorizontalList from '../components/SongHorizontalList';
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

  return (
    <ScrollView >
      <ImageBackground >
      <SongHorizontalList title="Album"></SongHorizontalList>
      <SongHorizontalList title="Hip-Hop"></SongHorizontalList>
      <SongHorizontalList title="Trap"></SongHorizontalList>
    </ImageBackground>
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  
});
