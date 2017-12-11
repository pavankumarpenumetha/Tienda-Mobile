import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View , Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, AddButton, MinusButton } from '../common';

class OrderListView extends Component {
    render() {
        const prodcutName = this.props.orderItem.split('!')[0].trim();
        const productQuantity = this.props.orderItem.split('!')[1].trim();
        return (
            <View style={styles.containerProducts}>
                <Text style={styles.titleStyle}>
                  {prodcutName}
                </Text>
                <Text style={styles.productQuantity}>
                {productQuantity} 
                </Text>
            </View>
        );
      }
}

const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
      alignSelf: 'flex-start',
    },
    productQuantity: {
      fontSize: 18,
      paddingRight: 15,
      alignSelf: 'flex-end',
    },
    containerProducts: {
      paddingTop: 20,
      paddingLeft: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: '#ddd',
      borderBottomWidth: 1,
    }
  };

export default OrderListView;