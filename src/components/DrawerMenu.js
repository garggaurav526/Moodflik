import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Image } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function DrawerMenu() {
    return (
        <View style={styles.mainDrawer}>
            <Text>

            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainDrawer:{
        // width:width,
        // position:'absolute',
        // top:0,
        // bottom:0,
        // right:0,
        // left:0,
        // height:height,
        // zIndex:999,
        // backgroundColor:'rgba(0,0,0,0.3)'
    }
})
