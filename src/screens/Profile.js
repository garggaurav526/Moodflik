import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import Like from '../components/Like'
import Dislike from '../components/Dislike'
import Icon from 'react-native-vector-icons/AntDesign';
import BottomMenu from '../components/BottomMenu'

import { globalColors, globalSpaces, globalStyles, globalHeadingFont, globalFontFamily } from '../globals/theme'
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Profile(props) {
    const [trendingReactionsOpen, setTrendingReactionsOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [likeSection, setLikeSection] = useState(true);
    const [dislikesCount, setDislikesCount] = useState(0);
    return (<>
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.cover}>
                    <Text style={styles.cover_txt}>Upload cover picture</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.profile_txt}>Upload profile picture</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.from}>From :</Text>
                    <Text style={styles.me}>Me, in 3 words</Text>
                    <Text style={styles.love}>Things I Love</Text>
                    <Text style={styles.dislike}>Things I Dislike</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CustomButton text={`Things I Love(${likesCount})`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={'left'} />
                    <CustomButton text={`Things I Dislikes(${dislikesCount})`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" style={{ left: 10, top: 2 }} />} textAlign={"left"} />
                </View>
            </View>
        </ScrollView>
        <BottomMenu
            navigation={props.navigation}
        />
    </>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 5,
        marginBottom:10
    },
    cover: {
        alignSelf: 'center',
        marginTop: 20
    },
    circle: {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderColor: globalColors.gray,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 10
    },
    profile_txt: {
        textAlign: 'center',
        width: '70%',
        alignSelf: 'center',
        marginTop: 60,
        color: '#6C0AC7',
        fontFamily: globalFontFamily.fontNunitoRegular,
        letterSpacing: 1,
        fontSize: 15,
        fontWeight: '600',
    },
    description: {
        marginTop: 80,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    from: {
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        color: globalColors.gray,
        fontSize: 22,
        fontWeight: '600',
    },
    me: {
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        color: '#6C0AC7',
        fontSize: 23,
        fontWeight: '800',
    },
    love: {
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        color: '#108A07',
        fontSize: 23,
        fontWeight: '800',
    },
    dislike: {
        color: '#BF1414',
        fontFamily: globalFontFamily.fontNunitoBold,
        letterSpacing: 1,
        fontSize: 23,
        fontWeight: '800',
    },
    cover_txt: {
        color: '#6C0AC7',
        fontFamily: globalFontFamily.fontNunitoRegular,
        letterSpacing: 1,
        fontSize: 15,
        fontWeight: '600',
    }
})
