import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import CustomButton from '../components/CustomButton'
import Like from '../components/Like'
import Dislike from '../components/Dislike'
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;


export default function Favourites() {
    const [trendingReactionsOpen, setTrendingReactionsOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [likeSection, setLikeSection] = useState(true);
    const [dislikesCount, setDislikesCount] = useState(0);


    return (
        <View>
                <View style={styles.main}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <CustomButton text={`Public Likes(${likesCount})`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48}  invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={'left'} />
                        <CustomButton text={`Public Dislikes(${dislikesCount})`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" style={{left:10,top:2}} />} textAlign={"left"} />
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
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        paddingHorizontal:5
    }
})
