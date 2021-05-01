import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function ContactUs() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    return (
        <ScrollView>
            <Text style={styles.heading}>Contact Us</Text>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.para}>
                    We are always happy to hear from both our users and also non-users of Moodflik.com; should you have any questions relating to this platform, questions for staff members, requests from the press, any form of dissatisfaction in using our platform, feeling the need to report abuse or an abuser discovered here or perhaps just wishing to provide us with feedback on your experiences in using either our web or mobile application or friendly and technical suggestions of what we can do to continue to improve our platform.
                </Text>
                <Text style={styles.para}>
                    For whatever the reason, please do not hesitate to contact us with the form below, or you may send us an email on info@moodflik.com and a member of our team will endeavour to get back to you as soon as possible.
                </Text>
                <Text style={styles.para}>
                    Thanks,
                </Text>
                <Text style={styles.para}>
                    The Team at Moodflik
                </Text>
                <Text style={styles.label}>Name</Text>
                <CustomInput placeHolder="Type here..." action={setName} value={name} />
                <Text style={styles.label}>Email</Text>
                <CustomInput placeHolder="Type here..." action={setEmail} value={email} />
                <Text style={styles.label}>Message</Text>
                <CustomInput placeHolder="Type here..." action={setMessage} value={message} />
                <View style={{marginHorizontal:80,marginBottom:20}}>
                    <CustomButton text={'Send'} />
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
    para: {
        lineHeight: 20,
        marginBottom: 15
    },
    label:{
        marginBottom: 10,
        fontStyle:'italic',
        fontWeight:'100'
    }
})
