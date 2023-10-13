import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

import { Button, TextButton, IconButton } from '../public/ui/button';
import { Colors } from '../public/ui/color';


function Community() {
  const statusBarHeight = Constants.statusBarHeight;

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
  }, []);
//{icon && <View style={[ButtonStyle.btnIcon, ...btnIcon]}>{icon}</View>}
  return (
    <SafeAreaProvider style={[{ paddingTop: statusBarHeight }]}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View>
          <Text style={{fontSize: 20, fontWeight: 600, marginVertical: 16, backgroundColor: '#000', color:'#fff'}}>버튼</Text>
          <Button title="Primary Button" size="L" type="Primary" icon={<FontAwesome5 name="star"/>} iconPosition="left"/>
          <Button title="Secondary Button" size="M" type="Secondary" />
          <Button title="Glass Button" size="S" type="Glass" />
          <Button title="Primary round Button" size="L" type="Primary_r" />
          <Button title="Secondary round Button" size="M" type="Secondary_r" />
          <Button title="Glass round Button" size="S" type="Glass_r" />
          <Text style={{fontSize: 20, fontWeight: 600, marginVertical: 16, backgroundColor: '#000', color:'#fff'}}>텍스트 버튼</Text>
          <TextButton title="Text tertiary Button" size="XS" type="Tertiary" />
          <TextButton title="Text quaternary Button" size="M" type="Quaternary" />
          <TextButton title="Text Gray Button" size="L" type="Gray" />
          <TextButton title="Text with Icon on the Left" icon={<FontAwesome5 name="star"/>} iconPosition="left" />
          <TextButton title="Text with Icon on the Right" icon={<FontAwesome5 name="star"/>} iconPosition="right" />
          <Text style={{fontSize: 20, fontWeight: 600, marginVertical: 16, backgroundColor: '#000', color:'#fff'}}>아이콘 버튼</Text>
          <IconButton title="Primary Icon Button" icon={<FontAwesome5 name="star"/>} size="L" type="Primary" />
          <IconButton title="Primary Icon Button" icon={<FontAwesome5 name="star"/>} size="M" type="Secondary" />
          <IconButton title="Primary Icon Button" icon={<FontAwesome5 name="star"/>} size="S" type="Tertiary" />
          <IconButton title="Primary Icon Button" icon={<FontAwesome5 name="star"/>} size="L" type="Quaternary" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
