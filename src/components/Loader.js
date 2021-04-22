import React from 'react'
import { StyleSheet, Dimensions, ActivityIndicator, Text, View } from 'react-native'
const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function Loader() {
    return (
        <View style={styles.main} >
            <View style={{position:'relative'}}>
                <ActivityIndicator size="large" style={styles.loader} color="#6C0AC7" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        
        zIndex: 9999,
        height: height,
        width: width,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    loader:{
        position:'absolute',
        top:vh * 45,
        left:vw * 45,
    }
})
