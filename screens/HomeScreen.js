import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pixel-makers.fr/mds/users.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Camera')
                }}>
                <Text style={styles.btnText}>Prendre une photo</Text>
            </TouchableOpacity>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    renderItem={({item}) => <Text onPress={() => navigation.navigate('Detail', item)} style={styles.item}>{item.firstName}</Text>}
                    keyExtractor={item => item.lastName}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 40,
    },
    item: {
        textAlign: 'center',
        padding: 10,
        fontSize: 78,
    },
    btn: {
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#0f3ac2',
        width: 200,
        marginLeft: '25%',
        marginTop: 25
    },
    btnText: {
        fontSize: 16,
        color: 'white'
    }
});

export default HomeScreen;
