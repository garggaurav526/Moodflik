import React, { useRef, Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, DrawerLayoutAndroid, Image, Dimensions, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import ImagePicker  from "react-native-image-picker";
import Loader from '../components/Loader'
import CustomButton from '../components/CustomButton'
import CustomTextArea from '../components/CustomTextArea'
import Like from '../components/Like'
import Dislike from '../components/Dislike'
import BottomMenu from '../components/BottomMenu'
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationView from "../components/NavigationView";
import FIcon from 'react-native-vector-icons/FontAwesome';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export default function CreatePost(props) {
    const drawer = useRef(null);

    const [isLoader, setIasLoader] = useState(false);
    const [likeSection, setLikeSection] = useState(true);
    const [lovingText, setLovingText] = useState("");
    const [lovingTextWhy, setLovingTextWhy] = useState("");
    const [dislikeText, setDislikeText] = useState("");
    const [dislikeTextWhy, setDislikeTextWhy] = useState("");
    const [fileUri, SetFileuri] = useState();

    const chooseImage = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (response) => {
            console.log("asds");
        });

        // ImagePicker.launchImageLibrary(options, (response) => {
        //     console.log('Response = ', response);
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //         alert(response.customButton);
        //     } else {
        //         SetFileuri(response.uri) //update state to update Image
        //     }
        // });
    }

    return (<>
            <ScrollView style={styles.main}>
                {isLoader &&
                    <Loader />
                }
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: vw * 90, marginBottom: 20 }}>
                        <View style={{ marginTop: 20 }}>
                            <Image style={{ height: 100, width: 100, borderRadius: 50, }} source={fileUri ? { uri: fileUri } : require('../assets/example.png')} />
                            <TouchableOpacity style={styles.addPictureIcon} onPress={chooseImage}>
                                <Text>Choose image</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CustomButton textStyle={{ width: 35 * vw, marginTop: 7 }} text={`What’s got you smiling today?`} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={43} invertColour={!likeSection ? '#6C0AC7' : '#108A07'} textColor="#fff" isIcon={true} icon={<Icon name="heart" size={20} color="#fff" />} textAlign={"left"} />
                            <CustomButton textStyle={{ width: 35 * vw }} text={`What’s been getting on your nerves today?`} invertColour={likeSection ? '#6C0AC7' : '#BF1414'} btnAction={() => setLikeSection(!likeSection)} enabled={true} btnWidth={43} isIcon={true} icon={<Icon name="dislike1" size={20} color="#fff" />} textAlign={"left"} />
                        </View>
                        {likeSection ?
                            <View>
                                <Text style={{ marginTop: 15, fontWeight: 'bold', textAlign: 'center' }}>I'm Currently Loving:</Text>
                                <CustomTextArea value={lovingText} action={(text) => setLovingText(text)} />
                                <Text style={styles.italic}>Why?(Optional)</Text>
                                <CustomTextArea value={lovingTextWhy} action={(text) => setLovingTextWhy(text)} />
                                <CustomButton text="Post" enabled={true} btnAction={() => navigation.navigate('SignUp')} btnWidth={40} />
                            </View>
                            :
                            <View>
                                <Text style={{ marginTop: 15, fontWeight: 'bold', textAlign: 'center' }}>I Currently Dislike:</Text>
                                <CustomTextArea value={dislikeText} action={(text) => setDislikeText(text)} />
                                <Text style={styles.italic}>Why?(Optional)</Text>
                                <CustomTextArea value={dislikeTextWhy} action={(text) => setDislikeTextWhy(text)} />
                                <CustomButton text="Post" enabled={true} btnAction={() => navigation.navigate('SignUp')} btnWidth={40} />
                            </View>
                        }
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
        backgroundColor: '#fff',
        height: height,
        width: width,
    },
    italic: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.6),
        fontStyle: 'italic',
        textAlign: 'center'
    }
})
