import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const beforeWritingQuestion = () => {
    return (
        <View>
            <View style={styles.beforeBox}>
                <View style={styles.todayTimeLimit}>
                    <FontAwesome5 name="clock" size={12} color="#AEA9B1" />
                    <Text style={{color: '#707070', fontSize: 12,}}>{"2023년 4월 6일"}</Text>
                </View>
                <Text style={styles.todayQna}>{"오늘의 질문 들어갈 영역"}</Text>
            </View>
            <View></View>
        </View>
    );
}

export default beforeWritingQuestion;

const styles = StyleSheet.create({
    beforeBox: {
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
        gap: 4,
    },
    todayQna: {
        color: '#111',
        marginTop: 12,
        fontSize: 18,
    },
});