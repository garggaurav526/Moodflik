import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import Like from '../components/Like'
import Dislike from '../components/Dislike'
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon5 from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomMenu from '../components/BottomMenu'


import { globalColors, globalSpaces, globalStyles, globalHeadingFont, globalFontFamily } from '../globals/theme'
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function Dashboard(props) {
    const [trendingReactionsOpen, setTrendingReactionsOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [likeSection, setLikeSection] = useState(true);
    const [dislikesCount, setDislikesCount] = useState(0);

    return (<>
        <ScrollView>
            <View style={styles.main}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomButton text={`Public Likes(${likesCount})`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={'left'} />
                    <CustomButton text={`Public Dislikes(${dislikesCount})`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" style={{ left: 10, top: 2 }} />} textAlign={"left"} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-evenly' }}>
                        <View style={styles.profile_img}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1601946265473x999519114820069900%2Fprofile%2520pic%2520avatar.png?w=128&h=128&auto=compress&dpr=1&fit=max',
                                }}
                            />
                        </View>
                        <View>
                            <Text>Rajat Singh</Text>
                            <Text>@Rajat</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 15 }}>
                        <FIcon5 name="user-plus" size={20} color="#6c0ac7" />
                    </View>
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
                <View style={{height:'55%'}}>
                    <View style={{ alignSelf: 'flex-end', marginRight: 15, marginVertical: 10,marginTop:'42%'}}>
                        <Text>17 days ago</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',  }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FIcon name="heart-o" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="like2" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="dislike2" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather name="message-circle" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <FIcon name="share-square-o" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <FIcon name="eye" size={25} color="#6c0ac7" />
                            <Text>(0)</Text>
                        </View>

                    </View>
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
        paddingHorizontal: 5
    },

    img: {
        width: 80,
        height: 80
    },
})
