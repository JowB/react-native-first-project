import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import CustomModal from "../components/CustomModal";
import FormContact from "../components/FormContact";

const DetailScreen = ({route, navigation}) => {
    // Récupère l'user qui est passé en param de la route
    const user = route.params;
    // Permet de rendre visible ou non la modale
    const [modalVisible, setModalVisible] = useState(false);

    // Permet de modifier le titre de la nav avec l'item passé en param de la route
    useEffect(() => {
        navigation.setOptions({title: user.firstName})
    });

    return (
        <View style={styles.container}>
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
            <CustomModal component={<FormContact />} visibility={modalVisible} setModalVisible={setModalVisible} />
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btnContact}>
                <Text style={styles.btnContactText}>Contacter {user.firstName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    btnContact: {
        display: 'flex',
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f3ac2',
        width: 200
    },
    btnContactText: {
        fontSize: 16,
        color: 'white'
    },
    img: {
        width: 280,
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
