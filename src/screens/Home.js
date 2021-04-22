import React, { useRef, useState } from "react";
import { ScrollView, DrawerLayoutAndroid,Dimensions, Button, StyleSheet, Text, View } from 'react-native'
import BottomMenu from '../components/BottomMenu'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Header from '../components/Header'
import NavigationView from "../components/NavigationView";
import CustomButton from "../components/CustomButton";
import Icon from 'react-native-vector-icons/AntDesign';
import Like from "../components/Like";
import Dislike from "../components/Dislike";
const { width, height } = Dimensions.get('window');

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function Home(props) {
    const drawer = useRef(null);
    const [trendingReactionsOpen, setTrendingReactionsOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [likeSection, setLikeSection] = useState(true);
    const [dislikesCount, setDislikesCount] = useState(0);

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'right'}
            renderNavigationView={NavigationView}
        >
            <Header
                navigation={props.navigation}
            />
            <ScrollView>
            <View style={styles.main}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <CustomButton text={`Public Likes(${likesCount})`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={'left'} />
                        <CustomButton text={`Public Dislikes(${dislikesCount})`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={48} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" style={{ left: 10, top: 2 }} />} textAlign={"left"} />
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
            </ScrollView>
            <BottomMenu
                navigation={props.navigation}
                activeScreen="Home"
            />
        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 5
    }
})
