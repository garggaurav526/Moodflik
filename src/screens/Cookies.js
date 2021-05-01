import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function Cookies() {
    return (
        <ScrollView>
            <Text style={styles.heading}>Cookie Policy</Text>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.para}>
                    This cookie policy ("Policy") describes what cookies are and how and they're being used by the moodflik.com website ("Website" or "Service") and any of its related products and services (collectively, "Services"). This Policy is a legally binding agreement between you ("User", "you" or "your") and this Website operator ("Operator", "we", "us" or "our"). You should read this Policy so you can understand the types of cookies we use, the information we collect using cookies and how that information is used. It also describes the choices available to you regarding accepting or declining the use of cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.
                </Text>
                <Text style={styles.heading}>What are cookies ?</Text>
                <Text style={styles.para}>
                    Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie").
                </Text>
                <Text style={styles.para}>
                    Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser.
                </Text>
                <Text style={styles.para}>
                    Persistent cookies are used to remember your preferences within our Website and remain on your desktop or mobile device even after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting the Website and Services.
                </Text>
                <Text style={styles.para}>
                    Cookies may be set by the Website ("first-party cookies"), or by third parties, such as those who serve content or provide advertising or analytics services on the Website ("third party cookies"). These third parties can recognize you when you visit our website and also when you visit certain other websites.
                </Text>
                <Text style={styles.heading}>What type of cookies do we use?</Text>
                <Text style={styles.subHeading}>Necessary cookies</Text>
                <Text style={styles.para}>
                    Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our Website and using its features. For example, these cookies let us recognize that you have created an account and have logged into that account to access the content.
                </Text>
                <Text style={styles.subHeading}>Functionality cookies</Text>
                <Text style={styles.para}>
                    Functionality cookies let us operate the Website and Services in accordance with the choices you make. For example, we will recognize your username and remember how you customized the Website and Services during future visits.
                </Text>
                <Text style={styles.heading}>What are your cookie options?</Text>
                <Text style={styles.para}>
                    If you don't like the idea of cookies or certain types of cookies, you can change your browser's settings to delete cookies that have already been set and to not accept new cookies. To learn more about how to do this or to learn more about cookies, visit internetcookies.org
                </Text>
                <Text style={styles.heading}>Changes and amendments</Text>
                <Text style={styles.para}>
                    We reserve the right to modify this Policy or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do, we will send you an email to notify you. Continued use of the Website and Services after any such changes shall constitute your consent to such changes.
                </Text>
                <Text style={styles.heading}>Acceptance of this policy</Text>
                <Text style={styles.para}>
                    You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.
                </Text>
                <Text style={styles.heading}>Contacting us</Text>
                <Text style={styles.para}>
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to our use of cookies, you may send an email to  info@moodflik.com
                </Text>
                <Text style={styles.para}>
                    This document was last updated on October 16, 2020
                </Text>
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
    }
})
