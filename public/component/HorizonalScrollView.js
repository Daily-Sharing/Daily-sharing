import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native';

const HorizonalScrollView = () => {
    const scrollViewRef = useRef(null);

    useEffect(() => {
        // 스크롤 뷰를 중앙으로 이동시키기 위해 contentOffset 설정
        scrollViewRef.current.scrollTo({ x: 115, y: 0, animated: false });
      }, []);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {renderRectangles()}
    </ScrollView>
  );
};

const renderRectangles = () => {
  const rectangles = [];

  rectangles.push(<View key={0} style={styles.rectangle}><Text>화창해요</Text></View>);
  rectangles.push(<View key={1} style={styles.rectangle}><Text>맑아요</Text></View>);
  rectangles.push(<View key={2} style={styles.rectangle}><Text>잔잔해요</Text></View>);
  rectangles.push(<View key={3} style={styles.rectangle}><Text>비내려요</Text></View>);
  rectangles.push(<View key={4} style={styles.rectangle}><Text>번개쳐요</Text></View>);

  return rectangles;
};

const styles = StyleSheet.create({
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

export default HorizonalScrollView;