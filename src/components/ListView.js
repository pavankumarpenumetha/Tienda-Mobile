import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, EditButton } from '../common';

class ListItem extends Component {
  onRowPress() {
    Actions.productList();
  }
  onEditPress() {
    Actions.edit({ storeItem: this.props.storeItem });
  }

  render() {
    const { store_name } = this.props.storeItem;
    return (
      <View style={styles.containerProducts}>
          <View style={{ flex : 7}}>
              <TouchableOpacity onPress={this.onRowPress.bind(this)} >
                  <Text style={styles.titleStyle}>
                    {store_name}
                  </Text>
              </TouchableOpacity>
          </View>
          <View style={{flex : 1,flexDirection: 'row',paddingBottom:3}}>
              <EditButton onPress={this.onEditPress.bind(this)}  src='./images/add.png'>
              </EditButton>
            </View>
      </View>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  },
  containerProducts: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  button: {
    width: 20,
    height: 20,
  }
};

export default ListItem;