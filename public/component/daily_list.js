import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const DailyList = () => {
    const [follow, setFollow] = useState(false);
    function followPushed(){
        setFollow(!follow);
    }

    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const likeBtn = () => {
        setLike(!like);

        if (!like) {
          setLikeCount(likeCount + 1);
        } else {
          setLikeCount(Math.max(likeCount - 1));
        }
    };

    return (
        <View style={styles.listBox}>
            <View style={styles.infoBox}>
                <View style={styles.userinfoBox}>
                    <View>
                        <Image style={styles.userProfileImg} source={require('../../assets/1.jpg')} resizeMode='cover' />
                    </View>
                    <View>
                        <Text>닉네임</Text>
                        <Text>유저 타입</Text>
                    </View>
                </View>
                <View >
                    <Text>0시간 전</Text>
                    <TouchableOpacity style={{marginTop: 8}} onPress={followPushed}>
                        <Text>{follow ? '언팔로우' : '팔로우'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.diaryDescBox}>
                <Image style={styles.diaryImg} source={require('../../assets/1.jpg')} />
                <Text style={styles.diaryDesc}>일기 여러줄 들어갈 영역</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.likeBtn} onPress={likeBtn}>
                    <FontAwesome5 name="heart" size={18} color={like ? "red" : "grey"} />
                    <Text style={styles.likeCount}>{likeCount}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DailyList;

const styles = StyleSheet.create({
  listBox: {
    paddingVertical: 16,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  userinfoBox:{
    flexDirection: 'row',
  },
  userProfileImg: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  diaryDescBox: {
    marginVertical: 12,
  },
  diaryImg: {
//    maxHeight: 171,
    marginBottom: 8,
  },
  diaryDesc: {
    fontSize: 16,
    paddingHorizontal: 16,
  },
  likeBtn: {
      flexDirection: 'row',
      paddingHorizontal: 16,
  },
  likeCount: {
    marginLeft: 4,
  },
});