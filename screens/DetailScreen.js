import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Modal, TouchableOpacity, Image} from "react-native";
import CustomModal from "../components/CustomModal";

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
            <CustomModal user={user} visibility={modalVisible} setModalVisible={setModalVisible} />
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
    }
});

export default DetailScreen;
