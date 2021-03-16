import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Modal, TouchableOpacity, Image} from "react-native";

const DetailScreen = ({route, navigation}) => {
    const user = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');

    // Permet de modifier le titre de la nav avec l'item passé en param de la route
    useEffect(() => {
        navigation.setOptions({title: user.firstName})
    });

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View>
                            <Image style={styles.img} source={{uri: user.avatarUrl}}/>
                        </View>
                        <View style={styles.infoText}>
                            <Text>{user.firstName}</Text>
                            <Text>{user.lastName}</Text>
                            <Text>{user.age} ans</Text>
                            <Text>{user.gender}</Text>
                            <Text>{user.email}</Text>
                            <Text>Né le: {user.birthDate}</Text>
                        </View>
                        <TouchableOpacity style={styles.btnClose} onPress={() => setModalVisible(false)}>
                            <Text style={styles.btnCloseText}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btnContact}>
                <Text style={styles.btnContactText}>Contacter {user.firstName}</Text>
            </TouchableOpacity>
        </View>
    )
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

export default DetailScreen;
