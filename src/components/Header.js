import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Header() {
    return (
        <View style={{ width: '100%',backgroundColor:'#6C0AC7' }}>
            <Image
                source={require('../assets/splash.png')}
                style={{ height: 50, width: '100%', resizeMode: 'contain' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
