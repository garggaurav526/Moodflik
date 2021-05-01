import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function AboutUs() {
    return (
        <ScrollView>
            <Text style={styles.heading}>About Us</Text>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.para}>
                    Moodflik was developed based on the fact that regardless of who we are, where we are from or what we belief, we all share one commonality – we all see, experience and react to things and events that we either love or dislike at any given moment in our lives; though we may sometimes go through these life experiences sub-consciously. We have also come to understand that most of the communications exchanged on many social media platforms can really be summarised into these two areas, thus filtering out irrelevant contents.
                </Text>
                <Text style={styles.para}>
                    It is our mission here at Moodflik to provide a fun, unique, engaging, diverse and safe platform for people from various walks of life with different values, opinions and perspectives to share their daily moments of joy and happiness as well as times of frustrations and dissatisfactions in the forms of likes and dislikes respectively and respectfully. We believe that sharing a balance of these two dichotomies of life provides a more comprehensive and candid overview of how we truly are both inwardly and outwardly, by expressing these constantly changing dual aspects of our daily reactions to life’s events we can better understand how our Moods flik (sorry, couldn’t resist :).
                </Text>
                <Text style={styles.para}>
                    We have come a very long way to make this platform a reality despite the numerous obstacles and challenges that have come our way, we maintained a can-do and never-give-up attitude because we are confident that Moodflik will play a key role in shaping a new approach to dialogue and purposeful content sharing on social media. Currently (to our knowledge), there are no other social media platforms offering this form of micro-blogging, so we hope you enjoy this new and unique experience with us as we continue in our plans to grow bigger, better and bolder.
                </Text>
                <Text style={styles.para}>
                    P.s Yes, we are aware that flik is not a word, but we are currently loving it ;)
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
    para:{
        lineHeight:20,
        marginBottom:15
    }
})
