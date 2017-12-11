import React, { Component } from 'react';
import { Alert, Text, ListView, ScrollView, View, AsyncStorage} from 'react-native';
import ListItem from './CartListView';
import { CardSection, Button } from '../common';
import { Actions } from 'react-native-router-flux';

class CartList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
        this.arrayholder = [] ;
    }
    componentWillMount() {
        this.count(this.props.cartItems);
    }

    onPlaceOrderPress()
    {
        Actions.orderList({ lists: this.props.cartItems});
        //AsyncStorage.setItem('@UsersOrders:key', this.arrayholder);
    }

    renderRow(cartItem){
        return <ListItem cartItem={cartItem.value}/>;
    }
    count(array_elements) {
       array_elements.sort();
        var current = null;
        var cnt = 0;
        
        for (var i = 0; i < array_elements.length; i++) {
            if (array_elements[i] != current) {
                if (cnt > 0) {
                    var value = current+"!"+cnt;
                    this.arrayholder.push({value});
                    this.setState({ arrayholder: this.state.arrayholder });
                }
                current = array_elements[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            var value = current+"!"+cnt;
            this.arrayholder.push({value});
            this.setState({ arrayholder: this.state.arrayholder });
        }

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.arrayholder);
    }
    render(){
       return(
            <View style={{ flex: 1}}>
                <ScrollView>
                    <ListView
                        dataSource={this.dataSource}
                        renderSeparator={this.ListViewItemSeparator}
                        renderRow = { this.renderRow.bind(this)}
                        enableEmptySections={true}
                        
                    />
                </ScrollView>
                <CardSection>
                    <Button onPress={this.onPlaceOrderPress.bind(this)}>
                        Place Order
                    </Button>
                </CardSection>
            </View>
        );
    }
}
export default CartList;
