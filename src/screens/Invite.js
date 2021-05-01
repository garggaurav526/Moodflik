import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import CustomButton from '../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function Invite() {
    return (
        <ScrollView>
            <Text style={styles.heading}>Invite a friend</Text>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.para}>
                    Hey, check out Moodflik, a unique micro-blogging platform that allows you to see and share reactions to things and events you love and dislike in real-time, simultaneously.
                </Text>
                <Text style={styles.para}>
                    Join and follow me and many others today by getting the free app at
                </Text>

                <Text style={styles.link}>https://www.moodflik.com/download</Text>
                <View style={{marginHorizontal:80,marginBottom:20}}>
                    <CustomButton text={'Copy'} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginVertical: 10
    },
    subHeading: {
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold',
        marginVertical: 10
    },
    para: {
        lineHeight: 20,
        marginBottom: 15
    },
    link:{
        lineHeight: 20,
        marginBottom: 15,
        textDecorationLine:'underline',
        color:'#03B4C6'
    }
})
