import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Modal } from 'react-native-paper';
import IconeMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconeIonicons from 'react-native-vector-icons/Ionicons';
import Sms from './Sms';
import { sms } from '../data/sms'; // Assurez-vous que cette importation est correcte
import { scale, verticalScale } from 'react-native-size-matters';

const Message = ({ navigation }) => {
    const [message, setMessage] = useState(false);

    const handleVisible = () => {
        setMessage(!message);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleVisible} style={styles.circle}>
                <View style={styles.notif}><Text style={styles.text_notif}>1</Text></View>
                <Text style={styles.icone}>
                    <IconeMaterialCommunityIcons name="message" size={30} />
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={false} visible={message}>
                <View style={styles.modal}>
                    <View style={styles.all_conversation}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={handleVisible}>
                                <Text style={styles.back_header}>
                                    <IconeIonicons name="arrow-back" size={26} />
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.text_header}>Conversations</Text>
                        </View>
                        <ScrollView style={styles.conversations}>
                            {sms.length === 0 ? (
                                <Text style={styles.noConversations}>
                                    Vous n'avez pas de discussion en cours
                                </Text>
                            ) : (
                                <Sms navigation={navigation} />
                            )}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -80,
        // flex:1
    },
    circle: {
        backgroundColor: '#7A4D09',
        width: scale(55),
        height: verticalScale(50),
        borderRadius: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginLeft: scale(280),
    },
    icone: {
        color: 'white',
    },
    modal: {
        height: verticalScale(1200),
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    all_conversation: {
        backgroundColor: 'white',
        height: '100%',
    },
    header: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: '#7A4D09',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    conversations: {
        flex: 1,
    },
    back_header: {
        color: 'white',
        fontSize: scale(20),
        marginLeft: 10,
        marginRight: 20,
    },
    text_header: {
        color: 'white',
        fontSize: scale(18),
    },
    noConversations: {
        textAlign: 'center',
        fontSize: scale(18),
        color: '#7A4D09',
        marginTop: 20,
    },
    notif:{
        width:'40%',
        height:'40%',
        backgroundColor:'#DE9F42',
        borderRadius:25,
        alignItems:'center',
        marginTop:'-30%',
        marginBottom:'-10%',
        marginLeft:'70%'
    },
    text_notif:{
        color:'white',
        fontWeight:'bold',
        fontSize:scale(16),
    },
});

export default Message;
