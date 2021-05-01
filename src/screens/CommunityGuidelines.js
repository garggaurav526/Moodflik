import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function CommunityGuidelines() {
    return (
        <ScrollView>
            <Text style={styles.heading}>Community Guidelines</Text>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.para}>
                    Welcome to the Moodflik community! This is a safe space to express, discuss and share your interests (in the form of People, Places and Things you love) and dislikes. However, please note that though we appreciate that we all have varying and opposite views on various matters, we specifically DO NOT welcome any posts that incite, encourage or explicitly portray  Hate ; hence the reason why we have specifically adopted the word  Dislike  rather than Hate. We will therefore kindly ask that all users adhere to our community guidelines as stipulated here.
                </Text>

                <Text style={styles.para}>
                    We want everyone to be part of our community and have their voice heard.
                    We encourage your feedback and aim to respond to your comments as soon as possible. While we do moderate this community, we welcome open discussion.
                </Text>
                <Text style={styles.para}>
                    To help everyone enjoy our community, we ask that when you post, you keep in mind the following:
                </Text>
                <Text style={styles.para}>
 We don’t allow defamatory, indecent, offensive, profane, discriminatory, misleading, unlawful or threatening comments.

 Personal attacks, name-calling, trolling and abuse will not be tolerated.

 Spamming, posting promotional material or posting links to third party websites is not permitted.

 We reserve the right to delete comments at our discretion and block any repeat offenders. We will remove content that is fraudulent, deceptive or misleading.

 Coordinated group attacks will not be tolerated.

 Respect that other people in the community have had different life experiences and may have a different perspective to yours. We welcome different viewpoints.

 Our community is a public place. Don’t post personal information that you would not be comfortable sharing with a stranger. We recommend that you don’t post any information that may identify you or anyone else, such as your address, email address or phone number.

 Moodflik Employees participating in the discussion in our community are reminded of the staff social media guidelines.
 </Text>
                <Text style={styles.para}>
                    If you have questions about a product or service of ours, please get in touch via our mobile or web applicattion
                    at www.moodflik.com
                </Text>
                <Text style={styles.para}>
                    If you’d like to chat with the Moodflik team, please get in touch with us
                    at:  info@moodflik.com
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
