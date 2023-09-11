import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const afterWritingQuestion = () => {
    const [question, setQuestion] = useState(false);
    function collapseQuestion(){
        setQuestion(!question);
    }

    return (
        <View>
            <View style={styles.weatherBox}>
                <View style={styles.weatherCon}>
                    <View>
                        <Text style={{fontSize: 20,}}>{"포도님의 날씨는"}</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{"화창해요"}</Text>
                    </View>
                    <Image source={require('../../assets/1.jpg')} style={{width: 120, height: 120}} />
                </View>
                <View style={styles.weatherTxtBox}>
                    <Image source={require('../../assets/favicon.png')} style={{width: 24, height: 24, marginRight: 8,}} />
                    <Text>{"포도님을 응원하는 많은 나비가 옆에 있어요!"}</Text>
                </View>
            </View>

            <View style={[styles.questionBox, styles.beforeBox]}>
                <View>
                    <View>
                        <View style={styles.todayTimeLimit}>
                            <FontAwesome5 name="clock" size={12} color="#AEA9B1" />
                            <Text style={{color: '#FFFFFF', marginLeft: 4, fontSize: 12,}}>{"2023년 4월 6일"}</Text>
                        </View>
                    </View>
                    <Text style={{color: '#FFFFFF', marginTop: 12}}>{"오늘의 질문 들어갈 영역"}</Text>
                </View>
                <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#495057"}}>
                    <Text style={{color: '#FFFFFF'}}>기록하기</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.questionBox, styles.aftereBox]} onPress={collapseQuestion}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.todayTimeLimit}>
                        <FontAwesome5 name="clock" size={12} color="#AEA9B1" />
                        <Text style={{color: '#FFFFFF', marginLeft: 4, fontSize: 12,}}>{"2023년 4월 6일"}</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 8}}>
                        <Text style={{color: '#FFFFFF', marginLeft: 4, fontSize: 12,}}>오늘 기록보기</Text>
                        <FontAwesome5 name={question ? "caret-up" : "caret-down"} size={12} color="#AEA9B1" />
                    </View>
                </View>
                <Text style={{color: '#FFFFFF', marginTop: 12}}>{"오늘의 질문 들어갈 영역"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default afterWritingQuestion;

const styles = StyleSheet.create({
    weatherBox: {
        marginHorizontal: 16,
    },
    weatherCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weatherTxtBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    questionBox: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginHorizontal: 16,
        marginTop: 24,
        backgroundColor: '#111111',
        borderRadius: 8,
    },
    todayTimeLimit: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    beforeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },
    afterBox: {

    },

});