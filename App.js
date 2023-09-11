import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { views } from './path/views';
import Question from './view/question';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Main() {
  const Diary = views.Diary;
  const Community = views.Community;
  const HealthInfo = views.HealthInfo;
  const MedicalSponsorship = views.MedicalSponsorship;
  const MyPage = views.MyPage;

  return (
    <Tab.Navigator
      initialRouteName="Diary"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#858585',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="하루공유"
        component={Diary}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('./assets/favicon.png') : require('./assets/icon.png')}
                style={{ width: size, height: size }}
              />
            )
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('./assets/favicon.png') : require('./assets/icon.png')}
                style={{ width: size, height: size }}
              />
            )
        }}
      />
      <Tab.Screen
        name="건강정보"
        component={HealthInfo}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('./assets/favicon.png') : require('./assets/icon.png')}
                style={{ width: size, height: size }}
              />
            )
        }}
      />
      <Tab.Screen
        name="의료/후원"
        component={MedicalSponsorship}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('./assets/favicon.png') : require('./assets/icon.png')}
                style={{ width: size, height: size }}
              />
            )
        }}
      />
      <Tab.Screen
        name="내정보"
        component={MyPage}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('./assets/favicon.png') : require('./assets/icon.png')}
                style={{ width: size, height: size }}
              />
            )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
    return (
        <SafeAreaProvider>
              <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }} >
                      <Stack.Screen name='Main' component={Main} />
                      <Stack.Screen name='Question' component={Question} />
                    </Stack.Navigator>
              </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
