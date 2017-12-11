import React from 'react';
import { Text, TouchableOpacity,Image } from 'react-native';

const EditButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={{ alignSelf: 'flex-end', paddingRight: 5}}>
           <Image
            style={styles.button}
            source={require('../images/edit.png')}
         />
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        width:20,
        height:20,
        paddingBottom:5
    }

};

export { EditButton };
