import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Modal, Dimensions, CheckBox, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Loader from '../components/Loader'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker'
import { DatePickerModal } from 'react-native-paper-dates';
import 'intl';
import 'intl/locale-data/jsonp/en'; 

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function SignUp({ navigation }) {
    const [isLoader, setIasLoader] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [dob, setDob] = useState(new Date());
    const [date, setDate] = useState("Date of Birth");
    const [showCalendar, setShowCalendar] = useState(false);

    const activateCalendar = (val) => {
        setShowCalendar(true)
    }

    const alertCalendar = () =>
        Alert.alert(
            "Alert Title",
            <DatePicker
                date={dob}
                onDateChange={setDob}
                mode="date"
            />,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const onDismissSingle = React.useCallback(() => {
        setShowCalendar(false);
    }, [showCalendar]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setShowCalendar(false);
            setDob(params.date);
            setDate(convertDate(params.date));
        },
        [showCalendar, dob]
    );

    const convertDate = (date)=>{
        var d = new Date(date);
        var t = d.getDate();
        var n = d.getMonth();
        var y = d.getFullYear();
        var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        return t+" "+mlist[n]+" "+y
    }

    return (
        <ScrollView style={styles.main}>
            {isLoader &&
                <Loader />
            }
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: vw * 90, minHeight: vh * 85 }}>
                    <View style={{ flexDirection: 'column', height: "100%", justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(3), textAlign: 'center', marginBottom: 20 }}>Sign Up</Text>
                            <CustomInput value={email} action={(text) => setEmail(text)} placeHolder={"First Name"} />
                            <CustomInput value={password} action={(text) => setPassword(text)} placeHolder={"Last Name"} secureTextEntry={true} />
                            <CustomInput value={email} action={(text) => setEmail(text)} placeHolder={"Email address"} />
                            <CustomInput value={password} action={(text) => setPassword(text)} placeHolder={"Password"} secureTextEntry={true} />
                            <TouchableOpacity style={styles.textBox} onPress={() => setShowCalendar(!showCalendar)}>
                                <Text>{date}</Text>
                            </TouchableOpacity>
                            <DatePickerModal
                                // locale={'en'} optional, default: automatic
                                mode="single"
                                visible={showCalendar}
                                onDismiss={()=>onDismissSingle()}
                                date={dob}
                                onConfirm={(params)=>onConfirmSingle(params)}
                            // validRange={{
                            //   startDate: new Date(2021, 1, 2),  // optional
                            //   endDate: new Date(), // optional
                            // }}
                            // onChange={} // same props as onConfirm but triggered without confirmed by user
                            // saveLabel="Save" // optional
                                label="Select date of birth" // optional
                            // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                            />
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={gender}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                                    prompt={"Gender"}
                                // mode={'dropdown'}
                                >
                                    <Picker.Item label="Male" value="male" />
                                    <Picker.Item label="Female" value="female" />
                                    <Picker.Item label="Prefer not to say" value="not_say" />
                                </Picker>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 }}>
                                <Text style={{ fontSize: RFPercentage(1.7), marginRight: 10, marginTop: 1 }}>
                                    By ticking the box, you are agreeing with our
                                </Text>
                                <Text style={{ fontSize: RFPercentage(2), color: '#03B4C6', marginRight: 10 }}>
                                    Terms and conditions
                                </Text>
                                <Text style={{ fontSize: RFPercentage(2), color: '#03B4C6', marginRight: 10 }}>
                                    Policy and Data Use
                                </Text>
                                <Text style={{ fontSize: RFPercentage(2), color: '#03B4C6', marginRight: 10 }}>
                                    Community guidelines
                                </Text>
                                <Text style={{ fontSize: RFPercentage(2), color: '#03B4C6', marginRight: 10 }}>
                                    Cookie use
                                </Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isChecked}
                                    onValueChange={setIsChecked}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Agree & Create Account</Text>
                            </View>
                            <CustomButton text="Confirm Sign Up" enabled={true} btnAction={() => navigation.navigate('SignUp')} btnWidth={60} />

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
    },
    picker: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    textBox:{
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        padding:16,
        marginBottom: vh * 2,
    }
})
