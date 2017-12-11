import React from 'react';
import { Text, View, TextInput } from 'react-native';


const Input = ({ placeholder, label, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.lableStyle} >{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 8,
        fontSize: 20,
        lineHeight: 23,
        flex: 2,
    },
    lableStyle: {
        color: '#000',
        fontSize: 20,
        flex: 1,
        paddingLeft: 10,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',

    }

};

export { Input };
