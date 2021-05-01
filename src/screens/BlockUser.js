import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
export default function BlockUser() {
    return (
        <ScrollView>
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <MaterialIcons name={'block'} style={styles.icon} />
                    </View>
                    <Text style={styles.heading}>Block User</Text>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Icon name={'person-add'} style={styles.icon2} />
                            </View>
                            <Text style={styles.subHeading}>Add blocked user</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Blocked Users:</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginVertical: 10,
    },
    icon: {
        textAlign: 'center',
        fontSize: RFPercentage(4),
        color: '#000',
        marginRight: 10,
    },
    icon2: {
        textAlign: 'center',
        fontSize: RFPercentage(3),
        color: '#000',
        marginRight: 10,
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
