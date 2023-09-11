import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';

const colors = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    // alignItems: 'center',
    // height:'30%',
  },
  rectangle: {
    width: 100,
    height: 120,
    marginHorizontal: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
  },
});

export default colors;