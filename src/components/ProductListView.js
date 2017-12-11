import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View , Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, AddButton, MinusButton } from '../common';

class ProductListView extends Component {
    constructor(){
        super();
        this.state={qunatity:0};
    }

  onAddPress() {
    this.setState(prevState => ({ qunatity: prevState.qunatity + 1 }));
    this.props.add({product: this.props.product});
  }

  onMinusPress() {
    if(this.state.qunatity > 0)
    {
      this.setState(prevState => ({ qunatity: prevState.qunatity -1 }));
      this.props.minus({product: this.props.product});
    }
    
  }

  render() {
    const { name , description} = this.props.product;
    return (
        <View style={styles.containerProducts}>
          <View style={{ flex : 3,flexDirection: 'column'}}>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
            <Text style={styles.descriptionStyle}>
              ({description})
            </Text>
            </View>
            <View style={{flex : 1,flexDirection: 'row'}}>
              <AddButton onPress={this.onAddPress.bind(this)} src='./images/add.png'>
              </AddButton>
              <Text style={{ paddingTop: 15,paddingRight:10}}>
                  {this.state.qunatity}
              </Text>
              <MinusButton onPress={this.onMinusPress.bind(this)} src='./images/add.png'>
              </MinusButton>
            </View>
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
  descriptionStyle:{
    fontSize:12,
    paddingLeft:3,
    paddingLeft: 15,
  },
  containerProducts: {
    marginTop: 10,
    paddingBottom:5,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderBottomWidth: 1,
  }
};

export default ProductListView;