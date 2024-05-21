import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Modal } from 'react-native-paper';
import IconeMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconeIonicons from 'react-native-vector-icons/Ionicons';
import Sms from './Sms';

const Message = ({navigation}) => {
    const [message, setMessage] = useState(false);

    const handleVisible = () => {
        setMessage(!message);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleVisible} style={styles.circle}>
                <Text style={styles.icone}>
                    <IconeMaterialCommunityIcons name="message" size={30} />
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={false} visible={message}>
                <View style={styles.modal}>
                    <View style={styles.all_conversation}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={handleVisible}>
                                <Text style={styles.text_header}>
                                    <IconeIonicons name="arrow-back" size={20} />
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.text_header}>Conversations</Text>
                        </View>
                        <ScrollView style={styles.conversations}>
                            <Sms navigation={navigation}/>
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
    },
    circle: {
        backgroundColor: '#47300D',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginLeft: 340,
    },
    icone: {
        color: 'white',
    },
    modal: {
        height: 1450,
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    all_conversation: {
        backgroundColor: 'white',
        height: '100%',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#47300D',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    conversations: {
        flex: 1,
        // Your conversation styles here
    },
    text_header: {
        color: 'white',
        fontSize: 20,
    },
});

export default Message;
