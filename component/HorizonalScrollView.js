import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Text, Image } from 'react-native';

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

  rectangles.push(<View key={0} style={{zIndex:1,...styles.rectangle}}>
    <Image style={styles.userProfileImg} source={require('../assets/1.jpg')} resizeMode='cover' />
    <Text>화창해요</Text>
    </View>);
  rectangles.push(<View key={1} style={{left:50,zIndex:2,...styles.rectangle}}>
    <Image style={styles.userProfileImg} source={require('../assets/1.jpg')} resizeMode='cover' />
    <Text>맑아요</Text>
    </View>);
  rectangles.push(<View key={2} style={{left:100,zIndex:3,...styles.rectangle}}>
    <Image style={styles.userProfileImg} source={require('../assets/1.jpg')} resizeMode='cover' />
    <Text>잔잔해요</Text>
    </View>);
  rectangles.push(<View key={3} style={{left:150,zIndex:2,...styles.rectangle}}>
    <Image style={styles.userProfileImg} source={require('../assets/1.jpg')} resizeMode='cover' />
    <Text>비내려요</Text>
    </View>);
  rectangles.push(<View key={4} style={{left:200,zIndex:1,...styles.rectangle}}>
    <Image style={styles.userProfileImg} source={require('../assets/1.jpg')} resizeMode='cover' />
    <Text>번개쳐요</Text>
    </View>);

  return rectangles;
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
    // alignItems: 'center',
    // height:'30%',
  },
  rectangle: {
    position: 'absolute',
    // left: 20,
    width: 100, 
    height: 120,
    marginHorizontal: 5, 
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
  },
  userProfileImg: {
    width: 36,
    height: 36,
    borderRadius: 50,
  }
});

export default HorizonalScrollView;