import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as Head from '../component/head';

function Diary() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>커뮤니티 페이지</Text>
    </View>
  );
}

export default Diary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
