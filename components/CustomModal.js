import React from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {BlurView} from "expo-blur";

const CustomModal = (props) => {
    return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.visibility}
            >
                <TouchableOpacity style={styles.btnClose} onPress={() => props.setModalVisible(false)}>
                    <Text style={styles.btnCloseText}>X</Text>
                </TouchableOpacity>
                    <View style={styles.container}>
                        <BlurView intensity={50} tint={'dark'} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                        <View style={styles.modalView}>
                            <ScrollView>
                                {props.component}
                            </ScrollView>
                        </View>
                        </BlurView>
                    </View>
            </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
        height: '85%',
        width: '85%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 25,
    },
    item: {
        textAlign: 'center',
        padding: 10,
        fontSize: 78,
    },
    btnClose: {
        position: 'absolute',
        elevation: 5,
        zIndex: 5,
        right: 20,
        top: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0819',
        width: 30,
        height: 30
    },
    btnCloseText: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CustomModal;
