import React, {useState} from "react";
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import { Formik } from 'formik';

const FormContact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <View>
            <Formik
                initialValues={{email: email, message: message}}
                onSubmit={values => {
                    setEmail(values.email);
                    setMessage(values.message);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={styles.form}>
                        <Text style={styles.text}>Envoyer un message</Text>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.input}
                            placeholder="Entrer votre email ici"
                        />
                        <TextInput
                            multiLine={true}
                            numberOfLine={4}
                            onChangeText={handleChange('message')}
                            onBlur={handleBlur('message')}
                            value={values.message}
                            placeholder="Entrer votre message ici"
                            style={styles.textArea}
                        />
                        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                            <Text style={styles.btnText}>Valider</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        margin: 20,
        marginTop: 40
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '100%',
        padding: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    textArea: {
        height:200,
        textAlignVertical: 'top',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: 300,
        padding: 5,
        marginBottom: 20,
        borderRadius: 5
    },
    btn: {
        display: 'flex',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cb61b',
        width: '100%',
        marginBottom: 20
    },
    btnText: {
        fontSize: 12,
        color: '#FFFFFF'
    },
});

export default FormContact;
