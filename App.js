import 'react-native-gesture-handler';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React, { Component, useEffect } from 'react'
import { View, Text, StatusBar, Dimensions, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/screens/Login'
import Landing from './src/screens/Landing'
import SignUp from './src/screens/SignUp'
import Home from './src/screens/Home'
import CreatePost from './src/screens/CreatePost'
import ProfileSetup from './src/screens/ProfileSetup';
import Favourites from './src/screens/Favourites';
import ProfileSetting from './src/screens/ProfileSetting';
import ForgotPassword from './src/screens/ForgotPassword';

import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;


class LogoTitle extends React.Component {
  render() {
    return (<View style={{width:'100%'}}>
      <Image
        source={require('./src/assets/splash.png')}
        style={{ height:50, width: '100%', resizeMode: 'contain' }}
      /></View>
    );
  }
}

const AppStack = createStackNavigator(
  {
    Home: Home,
    CreatePost: CreatePost,
    ProfileSetup: ProfileSetup,
    Favourites:Favourites,
    ProfileSetting:ProfileSetting,
    // Cart: Cart,
    // Notifications: Notifications,
    // Profile: Profile,
    // Orders: Orders,
    // Location: Location,
    // Category: Category,
    // Address:Address,
    // SearchScreen:SearchScreen,
  },
  {
    defaultNavigationOptions: {
      title: '',
      headerShown: false
    }
  }
);
const AuthStack = createStackNavigator(
  {
    Landing: Landing,
    Login: Login,
    SignUp: SignUp, 
    ForgotPassword: ForgotPassword 
  },
  {
    defaultNavigationOptions: {
      headerTitle: ()=> <LogoTitle/>,
      headerShown: true,
      headerStyle: {
        backgroundColor: '#6C0AC7',
      },
    }
  }
);

const navigator = createSwitchNavigator(
  {
    AuthLoading: App,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

function App({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      getToken();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('moodflik_app_sso_data')
      if (value !== null) {
        navigation.navigate("Home")
      } else {
        navigation.navigate("Landing")
      }
    } catch (e) {
      navigation.navigate("Landing")
    }
  }


  return (
    <View>
      {/* <StatusBar translucent backgroundColor='transparent' /> */}
      <View style={{ height: height, width: width, position: 'relative', backgroundColor: '#6C0AC7' }}>
        <Image
          style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
          source={require('./src/assets/splash.png')}
        />
      </View>
    </View>
  );
}

export default createAppContainer(navigator);
