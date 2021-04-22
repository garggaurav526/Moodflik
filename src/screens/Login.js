import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Loader from '../components/Loader'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Login({ navigation }) {
    const [isLoader, setIasLoader] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView style={styles.main}>
            {isLoader &&
                <Loader />
            }
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: vw * 90, minHeight: vh * 85 }}>
                    <View style={{ flexDirection: 'column', height: "100%", justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3), textAlign: 'center', marginBottom: 20 }}>Sign In</Text>
                            <CustomInput value={email} action={(text) => setEmail(text)} placeHolder={"Email address"} />
                            <CustomInput value={password} action={(text) => setPassword(text)} placeHolder={"Password"} secureTextEntry={true} />
                            <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
                                <Text style={{fontSize:RFPercentage(2.5),textDecorationStyle:'solid',textDecorationLine:'underline',textAlign:'center'}}>Forgot Password ?</Text>
                            </TouchableOpacity>
                            <CustomButton text="Confirm Sign In" enabled={true} btnAction={() => navigation.navigate('CreatePost')} btnWidth={60} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: height,
        width: width,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 15
    }
})
