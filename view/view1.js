import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

import DailyList from '../component/daily_list';

const handleCheckboxChange = () => {
    setFollow(!follow);
};

function Diary({navigation}) {
    const statusBarHeight = Constants.statusBarHeight;
    const [follow, setFollow] = useState(false);
    return (
    <SafeAreaProvider style={[styles.container, { paddingTop: statusBarHeight }]}>
        <ScrollView>
            <View style={styles.header}>
              <Text>2023년 4월 21일</Text>
              <View style={styles.BtnBox}>
                <TouchableOpacity style={styles.headerBtn}>
                    <FontAwesome5 name="star" size={18} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerBtn}>
                    <FontAwesome5 name="bell" size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.todayBox}>
                <View style={styles.todayTimeLimit}>
                    <FontAwesome5 name="clock" size={12} color="#AEA9B1" />
                    <Text style={{color: '#707070', marginLeft: 4, fontSize: 12,}}>2023년 4월 6일</Text>
                </View>
                <Text style={styles.todayQna}>오늘의 질문 들어갈 영역</Text>
            </View>
            <View style={styles.diaryList}>
                <View style={styles.diaryListBtnBox}>
                    <View style={styles.diaryListBtnBox}>
                        <TouchableOpacity >
                            <View style={styles.diaryListBtn}>
                                <FontAwesome5 name="star" size={18} color="#474747" />
                                <Text style={styles.diaryListBtnText}>최신순</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.diaryListBtn}>
                            <View style={styles.diaryListBtn}>
                                <FontAwesome5 name="user-friends" size={18} color="#474747" />
                                <Text style={styles.diaryListBtnText}>모아보기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.diaryListBtn}>
                        <View style={styles.diaryListBtn}>
                            <CheckBox value={follow}/>
                            <Text style={styles.diaryListBtnText}>최신순</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <DailyList />
                <DailyList />
                <DailyList />
                <DailyList />
                <DailyList />
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.floatingBtn} onPress={() => {
            console.log('Pressed!');
            navigation.push('Question');
        }}>
            <Text style={{color: 'white'}}>오늘의 하루 기록하기</Text>
        </TouchableOpacity>
    </SafeAreaProvider>
    );
}

export default Diary;

const styles = StyleSheet.create({
    floatingBtn: {
        position: 'absolute', // 화면에서 고정
        bottom: 20, // 아래에서 20만큼 떨어진 위치
        alignSelf: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 50,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    BtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtn: {
        padding: 8,
    },
    todayBox: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 16,
        marginTop: 8,
        borderRadius: 8,
    },
    todayTimeLimit: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todayQna: {
        color: '#111',
        marginTop: 12,
        fontSize: 18,
    },
    diaryList: {
        paddingHorizontal: 16,
        marginTop: 14,
    },
    diaryListBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    diaryListBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    diaryListBtnText: {
        marginLeft: 6,
    },
});
