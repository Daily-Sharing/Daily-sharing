import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

// style component
import NaviStyles from '../path/style';

// sub page
import DailyList from '../public/component/daily_list';
import AfterWriting from '../public/component/afterWritingQuestion';
import BeforeWriting from '../public/component/beforeWritingQuestion';


function Diary({navigation}) {
    const statusBarHeight = Constants.statusBarHeight;

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
    }, []);

    const [followView, setFollowView] = useState(false);

    const [currentView, setCurrentView] = useState(false);
    function arrangeCurrentView() {
        setCurrentView(!currentView);
    }

    const [gatherView, setGatherView] = useState(false);
    function gatherDiaryView() {
        setGatherView(!gatherView);
    }

    return (
    <SafeAreaProvider style={[styles.container, { paddingTop: statusBarHeight }]}>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
            <AfterWriting />
            <View style={styles.diaryList}>
                <View style={[styles.rowBox, {paddingHorizontal: 16}]}>
                    <View style={[styles.rowBox, {gap: 8}]}>
                        <TouchableOpacity onPress={arrangeCurrentView}>
                            <View style={[styles.diaryListBtn, {gap: 6}]}>
                                <Text style={styles.diaryListBtnText}>최신순</Text>
                                <FontAwesome5 name={currentView ? "caret-up" : "caret-down"} size={18} color="#474747" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.diaryListBtn} onPress={gatherDiaryView}>
                            <View style={[styles.diaryListBtn, {gap: 6}]}>
                                <Text style={styles.diaryListBtnText}>모아보기</Text>
                                <FontAwesome5 name={gatherView ? "caret-up" : "caret-down"} size={18} color="#474747" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.diaryListBtn}>
                        <View style={[styles.diaryListBtn, {gap: 8}]}>
                            <CheckBox value='follow' title='팔로우' onPress={() => setFollowView(!followView)} isChecked={followView} />
                        </View>
                    </TouchableOpacity>
                </View>
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
        position: 'absolute',
        bottom: 20,
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
        marginTop: 14,
    },
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    diaryListBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
//    diaryListBtnText: {
//        marginLeft: 6,
//    },
});
