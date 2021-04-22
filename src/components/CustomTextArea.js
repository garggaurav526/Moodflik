import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, Dimensions } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function CustomInput(props) {
    const { isIcon, inputStyle, autoCapitalize, value, secureTextEntry, Icon, placeHolder, inputType, action,onFocus } = props

    return (
        <View style={styles.main1}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {isIcon &&
                    <View style={styles.icon}>
                        {Icon}
                        {/* <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={icon} /> */}
                    </View>
                }
                <View style={[styles.box, inputStyle]}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={autoCapitalize}
                        value={value}
                        placeholder={placeHolder} placeholderTextColor="grey"
                        keyboardType={inputType}
                        onChangeText={(text) => action(text)}
                        secureTextEntry={secureTextEntry}
                        onFocus={()=>onFocus}
                        multiline={true}
                        numberOfLines={6}
                    />
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main1: {
        width: '100%',
        // backgroundColor:'red'
    },
    box: {
        // position: 'relative',
        borderColor: '#aaa',
        borderWidth: 1,
        marginBottom: vh * 2,
        width: '100%',
        padding:7,
        borderRadius: 10,
        // marginTop:15
    },
    input: {
        padding: RFPercentage(0.5),
        fontSize: RFPercentage(2.5),
        // marginTop:RFPercentage(1)
    },
    icon: {
        // position: 'absolute',
        width: vw * 7,
        height: vh * 4,
        marginTop: 15,
        marginRight: 5,
        // top: vh * 0.5,
        // left: vw * 3.5,
    },
    label: {
        marginLeft: RFPercentage(0.5),
        fontSize: RFPercentage(2.3),
        color: '#a0a0a0'

    }
})
