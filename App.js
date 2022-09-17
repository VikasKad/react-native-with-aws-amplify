
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,FlatList} from 'react-native';
import FeedPost from "./src/components/FeedPost";
import posts from './assets/data/posts.json';
export default function App() {
  return (
    <View style={styles.container}>
      {/* 
      <FeedPost post={posts[0]}/>
      <FeedPost post={posts[1]} /> 
      */}
      <FlatList
        data={posts}
        renderItem={
          ({ item }) => 
            <FeedPost post={item} />
          }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
