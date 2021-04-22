import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import Title from '../../components/Title'
import CustomButton from '../../components/CustomButton'

import { globalColors, globalSpaces, globalStyles, globalHeadingFont, globalFontFamily } from '../../globals/theme'
import CustomInput from '../../components/CustomInput'
import InputText from '../../components/inputText/inputText'

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function ProfileSetup({navigation}) {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.ProfileSetup}>
                    <View>
                        <Title text={"Profile Setup:"} titleStyle={styles.titleStyle} titleContainer={styles.titleContainer} />

                    </View>
                    <View style={styles.profile_img}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1601946265473x999519114820069900%2Fprofile%2520pic%2520avatar.png?w=128&h=128&auto=compress&dpr=1&fit=max',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.input_container}>
                    <InputText
                        placeholder='Choose Username'
                        containerStyle={styles.inputViewContainer}
                        placeholderTextColor='#333333'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    />
                    <InputText
                        placeholder='Mobile Number'
                        containerStyle={styles.inputViewContainer}
                        placeholderTextColor='#333333'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    />
                    {/* <View style={styles.picker}>
                        <Picker
                            // selectedValue={gender}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            prompt={"Country"}
                        // mode={'dropdown'}
                        >
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Prefer not to say" value="not_say" />
                        </Picker>
                    </View> */}
                    <InputText
                        placeholder='City'
                        // style={{color:'red'}}
                        containerStyle={styles.inputViewContainer}
                        placeholderTextColor='#333333'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={[styles.inputStyle]}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    />
                    <InputText
                        placeholder='Website (Optional)'
                        containerStyle={styles.inputViewContainer}
                        placeholderTextColor='#333333'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    />
                </View>
                <View>
                    <Text style={[styles.bio_txt, { textAlign: 'center' }]}>Bio:</Text>
                </View>
                <View style={styles.input_with_title}>
                    <View>
                        <Text style={styles.bio_txt}>Me in 3 Words:</Text>
                        <InputText
                            placeholder=''
                            containerStyle={[styles.inputViewContainer,]}
                            placeholderTextColor='#333333'
                            inputContainerStyle={[styles.inputContainer, { marginHorizontal: 40 }]}
                            inputStyle={styles.inputStyle}
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        />
                        <Text style={[styles.remaining_txt, { textAlign: 'right', bottom: 20 }]}>(16 left)</Text>
                    </View>
                    <View>
                        <Text style={styles.bio_txt}>Things I Love:</Text>
                        <InputText
                            placeholder=''
                            containerStyle={[styles.inputViewContainer,]}
                            placeholderTextColor='#333333'
                            inputContainerStyle={[styles.inputContainer, { marginHorizontal: 40 }]}
                            inputStyle={styles.inputStyle}
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        />
                        <Text style={[styles.remaining_txt, { textAlign: 'right', bottom: 20 }]}>(50 max)</Text>
                    </View>
                    <View>
                        <Text style={styles.bio_txt}>Things I Dislike:</Text>
                        <InputText
                            placeholder=''
                            containerStyle={[styles.inputViewContainer,]}
                            placeholderTextColor='#333333'
                            inputContainerStyle={[styles.inputContainer, { marginHorizontal: 40 }]}
                            inputStyle={styles.inputStyle}
                        // onChangeText={text => setEmail(text)}
                        // value={email}
                        />
                        <Text style={[styles.remaining_txt, { textAlign: 'right', bottom: 20 }]}>(50 max)</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <CustomButton text="Favourites" enabled={true} btnAction={() => navigation.navigate('Favourites')} btnWidth={70} />
                </View>
                <View style={{marginBottom:20}}>
                    <CustomButton text="Profile Setting" enabled={true} btnAction={() => navigation.navigate('ProfileSetting')} btnWidth={70} />
                </View>
                <View style={{marginBottom:20}}>
                    <CustomButton text="Forgot Password" enabled={true} btnAction={() => navigation.navigate('ForgotPassword')} btnWidth={70} />
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
    ProfileSetup: {
        alignItems: 'center',
        marginTop: globalSpaces.marginTop10

    },
    img: {
        width: 120,
        height: 120
    },
    titleStyle: {
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        color: globalColors.black,
        fontSize: globalHeadingFont.h1,
        fontWeight: '700',

    },
    profile_img: {
        marginTop: globalSpaces.marginTop20
    },

    inputContainer: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        color: 'red'

    },
    inputStyle: {
        fontFamily: globalFontFamily.fontNunitoRegular,
        letterSpacing: 1,
        color: globalColors.black,
        fontSize: 20,
        fontWeight: '600',
    },
    input_container: {
        marginHorizontal: 20,
        marginTop: globalSpaces.marginTop20

    },
    bio_txt: {
        fontFamily: globalFontFamily.fontNunitoRegular,
        letterSpacing: 1,
        color: globalColors.black,
        fontSize: 21,
        fontWeight: '600',
        // textAlign: 'center'

    },
    picker: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        color: 'red',
        marginHorizontal: globalSpaces.marginHorizontal10,

    },
    input_with_title: {
        marginTop: 25

    },
    remaining_txt: {
        fontFamily: globalFontFamily.fontNunitoRegular,
        letterSpacing: 1,
        color: globalColors.black,
        fontSize: 17,
        fontWeight: '600',
    }
})
