import React from "react";
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CustomModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visibility}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View>
                        <Image style={styles.img} source={{uri: props.user.avatarUrl}}/>
                    </View>
                    <View style={styles.infoText}>
                        <Text>{props.user.firstName}</Text>
                        <Text>{props.user.lastName}</Text>
                        <Text>{props.user.age} ans</Text>
                        <Text>{props.user.gender}</Text>
                        <Text>{props.user.email}</Text>
                        <Text>Né le: {props.user.birthDate}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnClose} onPress={() => props.setModalVisible(false)}>
                        <Text style={styles.btnCloseText}>Fermer</Text>
                    </TouchableOpacity>
                </View>
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
        height: '80%',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    item: {
        textAlign: 'center',
        padding: 10,
        fontSize: 78,
    },
    btnClose: {
        display: 'flex',
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0819',
        width: 70,
        marginBottom: 20
    },
    btnCloseText: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    img: {
        width: 300,
        height: 200,
        marginTop: 10
    },
    infoText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default CustomModal;
