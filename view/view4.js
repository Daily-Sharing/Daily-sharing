import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as Head from '../component/head';

function MedicalSponsorship() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>의료/후원 페이지</Text>
    </View>
  );
}

export default MedicalSponsorship;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
