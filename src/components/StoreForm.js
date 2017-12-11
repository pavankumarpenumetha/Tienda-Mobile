import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { storeUpdate } from '../actions';
import { CardSection, Input } from '../common';

class StoreFrom extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name:"
            placeholder="Vijetha store"
            value={this.props.store_name}
            onChangeText={value => this.props.storeUpdate({ prop: 'store_name', value })}
          />
        </CardSection>
        <CardSection>
         <Input
            label="Location:"
            placeholder="location"
            value={this.props.description}
            onChangeText={value => this.props.storeUpdate({ prop: 'description', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { id,store_name, description } = state.storeForm;

  return { id, store_name, description };
};

export default connect(mapStateToProps, { storeUpdate })(StoreFrom);
