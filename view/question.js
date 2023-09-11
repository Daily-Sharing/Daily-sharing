import { StyleSheet, Text, View } from 'react-native';
import HorizonalScrollView from '../public/component/HorizonalScrollView';
function Question() {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
        <View style={styles.todayQuestion}>
            <Text style={{fontSize:20}} numberOfLines={0} ellipsizeMode="word">오늘의 마음 날씨는 어떤가요? 날씨를 선택해주세요</Text>
        </View>

      <HorizonalScrollView></HorizonalScrollView>
    </View>
    
  );
}

export default Question;

const styles = StyleSheet.create({
    todayQuestion: {
        marginLeft: 0,
        marginTop: 8,
        marginRight: 50,
        borderRadius: 8,
        backgroundColor: 'red'
    }
});
