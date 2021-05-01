import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Image } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerMenu from './DrawerMenu';
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function HeaderLogo(props) {

    return (
        <View style={{ width: '100%', backgroundColor: '#6C0AC7', height: 80, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',position:'relative' }}>
                {props.previous &&
                    <TouchableOpacity style={{ flexDirection: 'column',position:'absolute', justifyContent: 'center', marginLeft: 10,top:7 ,zIndex:999}} onPress={props.navigation.goBack}>
                        <Icon name={"arrow-back"} color="#fff" size={RFPercentage(5)} />
                    </TouchableOpacity>
                }
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Image
                        source={require('../assets/splash.png')}
                        style={{ height: 50, width: '100%', resizeMode: 'contain' }}
                    />
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
