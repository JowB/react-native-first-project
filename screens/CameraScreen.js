import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera} from "expo-camera";
import {Icon} from "react-native-elements";
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photos, setPhotos] = useState([]);
    const ref = useRef(null);

    const _takePhoto = async () => {
        const photo = await ref.current.takePictureAsync();
        let newObject = {
            id: reformatId(photo.uri),
            isSaved: false,
            data: photo
        }
        setPhotos([newObject, ...photos]);
        AsyncStorage.setItem('pictures', JSON.stringify([newObject, ...photos]));
    }

    // Transforme l'uri en tableau pour mettre le nom de la photo en id
    const reformatId = (uri) => {
        const uriToArray = uri.split('/');
        return uriToArray[uriToArray.length - 1];
    }

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');

            const jsonValue = await AsyncStorage.getItem('pictures');
            if (jsonValue != null) {
                setPhotos(JSON.parse(jsonValue));
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const savePicture = (item) => {
        MediaLibrary.saveToLibraryAsync(item.data.uri)
            .catch(() => {
                Alert.alert('Echec de la sauvegarde');
            })
            .finally(() => {
                Alert.alert('La photo à bien été enregistré');
            });

        let newArrayPhotos = [];
        photos.map((img) => {
            if (item.id === img.id) {
                img.isSaved = true;
            }
            newArrayPhotos.push(img);
        })

        setPhotos(newArrayPhotos);
        AsyncStorage.setItem('pictures', JSON.stringify(newArrayPhotos));
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <View style={styles.viewIcon}>
                            <Icon name='exchange' type='font-awesome' color='black'/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={_takePhoto}>
                        <View style={styles.viewIcon}>
                            <Icon name='circle' type='font-awesome' color='black'/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.viewFakeIcon}>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>

            {photos.length === 0 ? null : (
                <FlatList
                    data={photos}
                    renderItem={({item}) => <TouchableOpacity style={{zIndex: 1, position: 'relative'}}
                                                              onPress={() => savePicture(item)}>
                        <Image
                            source={item.data}
                            style={styles.img}
                            resizeMode={'cover'}
                        />
                        <Icon name={item.isSaved ? 'check' : 'cloud-upload'} type='font-awesome'
                              color={item.isSaved ? 'green' : 'red'} size={15}/>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => 'id :' + item.id}
                    horizontal={true}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        width: '90%',
        height: '60%',
        margin: 20,
        marginTop: 0
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    button: {
        alignSelf: 'flex-end',
    },
    viewIcon: {
        backgroundColor: 'white',
        height: 40,
        width: 40,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center'
    },
    viewFakeIcon: {
        height: 40,
        width: 40,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    img: {
        width: 100,
        height: 150,
        margin: 10,
    }
});

export default CameraScreen;
