import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Image } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerMenu from './DrawerMenu';
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Header(props) {

    const openDrawer = () => {
        props.navigation.openDrawer();
    }

    return (
        <View style={{ width: '100%', backgroundColor: '#6C0AC7', height: 80, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {props.previous &&
                    <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }} onPress={props.navigation.goBack}>
                        <Icon name={"arrow-back"} color="#fff" size={RFPercentage(5)} />
                    </TouchableOpacity>
                }
                <View style={{width:'45%',flexDirection:'row',justifyContent:'center'}}>
                    <Image
                        source={require('../assets/splash.png')}
                        style={{ height: 50, width: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', width: '35%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => props.navigation.navigate("Search")}>
                            <Icon name={props.activeScreen == "Search" ? 'search' : 'search-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(5), marginRight: 5, color: props.activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => props.navigation.navigate("Chat")}>
                            <Icon name={props.activeScreen == "Chat" ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(5), marginRight: 5, color: props.activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={openDrawer}>
                            <Icon name={props.activeScreen == "Menu" ? 'menu' : 'menu-outline'} style={{ width: '100%', textAlign: 'center', fontSize: RFPercentage(5.5), marginRight: 5, marginTop: -3, color: props.activeScreen == "Order" ? '#f04c4c' : '#fff' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerMenu: {
        width: vw * 80,
        minHeight: 200,
        position: 'absolute',
        top: 30,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'red'
    }
})
