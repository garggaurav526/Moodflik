import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Loader from '../components/Loader'
import CustomButton from '../components/CustomButton'
import Like from '../components/Like'
import Dislike from '../components/Dislike'
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Landing({ navigation }) {
    const [isLoader, setIasLoader] = useState(false);
    const [trendingReactionsOpen, setTrendingReactionsOpen] = useState(false);
    const [likeSection, setLikeSection] = useState(true);
    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    return (
        <ScrollView style={styles.main}>
            {isLoader &&
                <Loader />
            }
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: vw * 90 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: RFPercentage(2.7), marginTop: 10 }}>Welcome to Moodflik, Where you can:</Text>
                    <View>
                        <View style={styles.row}>
                            <View style={{ width: '20%', flexDirection: 'row',justifyContent:'space-between',marginTop:5 }}>
                                <Icon name="heart" size={RFPercentage(3.5)} color="#6C0AC7" />
                                <View style={styles.verticleBar}></View>
                                <Icon name="dislike1" style={{marginRight:10}} size={RFPercentage(3.5)} color="#6C0AC7" />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text>
                                    See,Share & Speak about daily events & experiences of thingsyou love & dislike simultaneously.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '20%',marginTop:5 }}>
                                <FIcon name="user-plus" size={RFPercentage(3.5)} color="#6C0AC7" />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text>
                                    Find & Follow your favourite people, places & organisations with similar interests & dislikes.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '20%',marginTop:5 }}>
                                <Icon name="message1" size={RFPercentage(3.5)} color="#6C0AC7" />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text>
                                    Join live hot trending topics of events happening locally & globally with diverse reactions.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: RFPercentage(2.5), marginTop: 10 }}>No account? No problem. Jump on board in seconds.</Text>

                    <View>
                        <CustomButton text="Sign Up" enabled={true} btnAction={() => navigation.navigate('SignUp')} btnWidth={60} />
                        <CustomButton text="Sign In" enabled={true} btnAction={() => navigation.navigate('Login')} btnWidth={60} invertColour={'#fff'} textColor="#6C0AC7" isBorder={true} />
                        <CustomButton text="See Trending Reactions" btnAction={() => setTrendingReactionsOpen(!trendingReactionsOpen)} enabled={true} btnWidth={60} />
                    </View>
                    {trendingReactionsOpen &&
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <CustomButton text={`Public Likes(${likesCount})`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={43} invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={"left"} />
                                <CustomButton text={`Public Dislikes(${dislikesCount})`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={43} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" />} textAlign={"left"} />
                            </View>
                            <View style={{ marginTop: 15, marginBottom: 20 }}>
                                {likeSection ?
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Like c_width={vw * 80} />
                                    </View>
                                    :
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Dislike c_width={vw * 80} />
                                    </View>
                                }
                            </View>
                        </View>
                    }
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
    verticleBar:{
        height:RFPercentage(3.5),
        backgroundColor:'#6C0AC7',
        width:3
    }
})
