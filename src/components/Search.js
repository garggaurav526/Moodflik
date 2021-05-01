import React from 'react'
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BottomMenu from './BottomMenu';
import CustomInput from './CustomInput';
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Search(props) {
    const [string, setString] = React.useState("");

    const handleSearchText = (text) => {
        setString(text)
    }
    return (<>
        <ScrollView>
            <Text style={{ textAlign: 'center', fontSize: RFPercentage(3), marginTop: 10, fontWeight: 'bold' }}>
                Your Search Result
            </Text>
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                <CustomInput placeHolder={"Start typing..."} action={(text) => handleSearchText(text)} value={string} />
            </View>
        </ScrollView>
        <KeyboardAvoidingView>
            <BottomMenu navigation={props.navigation} />
        </KeyboardAvoidingView>
    </>
    )
}

const styles = StyleSheet.create({})
