import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

function HealthInfo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>건강정보 페이지</Text>
    </View>
  );
}

export default HealthInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
