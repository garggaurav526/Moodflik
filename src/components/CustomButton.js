import React, { Component } from 'react'
import { Text, Button, StyleSheet, Dimensions, Image, View,TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CustomButton(props) {
  const { isIcon, icon, invertColour, btnAction,textColor, textAlign, text, btnWidth, enabled, alertMesg,isBorder ,textStyle} = props
  return (
    <View style={styles.btnContainer}>
      <View style={[styles.btn, {borderWidth: isBorder ? 1 : 0, width: btnWidth ? vw * btnWidth : '100%',backgroundColor: invertColour ? invertColour : '#6C0AC7' }]}>
        <TouchableOpacity onPress={() => enabled ? btnAction() : null}>
          <Text style={[styles.text,textStyle, { textAlign: textAlign ? textAlign : 'center',color: textColor ? textColor: '#fff' }]} >{text}</Text>
        </TouchableOpacity>
        
        {isIcon &&
          <View style={styles.icon}>
            {icon}
            {/* <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={icon} /> */}
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    // width: '100%',
    // height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10
  },
  btn: {
    borderColor: '#6C0AC7',
    // backgroundColor: 'red',
    borderRadius: 10,
    position: 'relative',
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  text: {
    color: '#fff',
    padding: 10,
    paddingLeft: 20,
    fontSize: RFPercentage(2.3)
  },
  icon: {
    justifyContent: 'center',
    position: 'absolute',
    // width: vw * 6,
    marginTop:1,
    height: '100%',
    right: 15,
  }
})
