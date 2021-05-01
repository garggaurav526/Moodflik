import 'react-native-gesture-handler';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
import React, { Component, useEffect, useState } from 'react'
import { View, Text, StatusBar, Dimensions, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "./src/globals/Context";
import DrawerContent from './src/globals/DrawerContent'

import Header from './src/components/Header'
import HeaderLogo from './src/components/HeaderLogo'

import Login from './src/screens/Login'
import Landing from './src/screens/Landing'
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword';

import HomeScreen from './src/screens/Home'
import CreatePostScreen from './src/screens/CreatePost'
import FavouritesScreen from './src/screens/Favourites';
import Profile from './src/screens/Profile';
import Dashboard from './src/screens/Dashboard';
import Notifications from './src/screens/Notifications';
import SearchScreen from './src/components/Search';

// drawer screens
import ProfileSetting from './src/screens/ProfileSetting';
import ProfileSetupScreen from './src/screens/ProfileSetup';
import NotificationSetting from './src/screens/NotificationSetting'
import PrivacySetting from './src/screens/PrivacySetting'
import BlockUser from './src/screens/BlockUser'
import Invite from './src/screens/Invite'
import Help from './src/screens/Help'
import AboutUs from './src/screens/AboutUs'
import ContactUs from './src/screens/ContactUs'
import Cookies from './src/screens/Cookies'
import TermsConditions from './src/screens/TermsConditions'
import Policy from './src/screens/Policy'
import CommunityGuidelines from './src/screens/CommunityGuidelines'

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Auth = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDrawer = createDrawerNavigator();


class LogoTitle extends React.Component {
  render() {
    return (<View style={{ width: '100%' }}>
      <Image
        source={require('./src/assets/splash.png')}
        style={{ height: 50, width: '100%', resizeMode: 'contain' }}
      /></View>
    );
  }
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home" component={Dashboard}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="CreatePost" component={CreatePostScreen}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="ProfileSetup" component={ProfileSetupScreen}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Favourites" component={FavouritesScreen}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Notifications" component={Notifications}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Profile" component={Profile}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Search" component={SearchScreen}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <Header previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      {/* Drawer screen navigation */}
      <HomeStack.Screen
        name="ProfileSetting" component={ProfileSetting}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="NotificationSetting" component={NotificationSetting}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="PrivacySetting" component={PrivacySetting}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="BlockUser" component={BlockUser}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Invite" component={Invite}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Help" component={Help}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="AboutUs" component={AboutUs}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="ContactUs" component={ContactUs}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Cookies" component={Cookies}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="TermsConditions" component={TermsConditions}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Policy" component={Policy}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="CommunityGuidelines" component={CommunityGuidelines}
        options={{
          headerShown: true,
          header: ({ scene, previous, navigation }) => {
            return (
              <HeaderLogo previous={previous} navigation={navigation} />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  )
}

export default ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setLoading(false);
        setUserToken(null);
      }
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <View>
      {/* <StatusBar translucent backgroundColor='transparent' /> */}
      <View style={{ height: height, width: width, position: 'relative', backgroundColor: '#6C0AC7' }}>
        <Image
          style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
          source={require('./src/assets/splash.png')}
        />
      </View>
    </View>;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {!userToken ? (
          <Auth.Navigator>
            <Auth.Screen name="Main" component={Landing}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                  backgroundColor: '#6C0AC7',
                },
              }}
            />
            <Auth.Screen name="Login" component={Login}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                  backgroundColor: '#6C0AC7',
                },
              }}
            />
            <Auth.Screen name="SignUp" component={SignUp}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                  backgroundColor: '#6C0AC7',
                },
              }}
            />
            <Auth.Screen name="ForgetPassword" component={ForgotPassword}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                  backgroundColor: '#6C0AC7',
                },
              }}
            />
          </Auth.Navigator>
        ) : (
          <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Shop" component={HomeStackScreen}
              options={
                {
                  drawerLabel: "Shop",
                  drawerIcon: ({ tintColor }) => <Icon name={'home'} size={30} color={tintColor} />
                }
              }
            />
          </Drawer.Navigator>
          // <Auth.Navigator>
          //   <Auth.Screen name="Home" component={HomeStackScreen}
          //     options={{
          //       headerTitle: props => <Header {...props} />,
          //       headerShown: false,
          //       headerStyle: {
          //         backgroundColor: '#6C0AC7',
          //       },
          //     }}
          //   />
          // </Auth.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

