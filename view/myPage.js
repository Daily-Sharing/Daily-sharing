import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

function MyPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>내정보 페이지</Text>
    </View>
  );
}

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
