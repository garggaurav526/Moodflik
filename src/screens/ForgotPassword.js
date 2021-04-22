import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

import { globalColors, globalSpaces, globalStyles, globalHeadingFont, globalFontFamily } from '../globals/theme'
import CustomInput from '../components/CustomInput'
import InputText from '../components/inputText/inputText'

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;

export default function ForgotPassword() {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={{marginTop:20}}>
                    <Title text={"Enter Your Email"} titleStyle={styles.titleStyle} titleContainer={styles.titleContainer} />
                </View>
                <View style={styles.input_container}>
                    <InputText
                        placeholder='Email Address'
                        containerStyle={styles.inputViewContainer}
                        placeholderTextColor='#333333'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    />
             
                </View>
                <View style={{marginBottom:20}}>
                    <CustomButton text="Send" enabled={true} btnAction={() => navigation.navigate('ForgotPassword')} btnWidth={60} />
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
    container: {
        marginHorizontal: globalSpaces.marginHorizontal20,
    },
    titleStyle: {
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        color: globalColors.black,
        fontSize: globalHeadingFont.h1,
        fontWeight: '700',
        alignSelf: 'center'
    },
    inputContainer: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
marginTop:20
    },
})
