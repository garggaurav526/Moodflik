import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function Dislike(props) {
    const { data, c_width } = props
    return (
        <View style={[styles.main, { width: c_width }]}>
            <Text></Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={styles.lbar}></View>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Why?</Text>
                <View style={styles.rbar}></View>
            </View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#BF1414',
        borderRadius: 10,
        padding:20,
        minHeight:100
    },
    lbar:{
        height:2,
        width:vw*20,
        backgroundColor:'#fff',
        marginTop:10,
        marginRight:5
    },
    rbar:{
        height:2,
        width:vw*20,
        backgroundColor:'#fff',
        marginTop:10,
        marginLeft:5
    }
})

