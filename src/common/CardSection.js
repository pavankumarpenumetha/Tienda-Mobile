import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = Styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
    }
};

export { CardSection };
