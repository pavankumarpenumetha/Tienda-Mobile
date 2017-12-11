import _ from 'lodash';
import React, { Component } from 'react';
import {ListView, ActivityIndicator,View,TextInput,Text, ScrollView,Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { productFetch } from '../actions';
import ListItem from './ProductListView';
import { Button, CardSection } from '../common';

class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            text: '',
        }
        this.arrayholder = [] ;
        this.itemClick = [];
    }
    componentDidMount() {
        this.setState({isLoading: false});
        this.props.productFetch();
        this.createDataSourece(this.props)
    }
    addProducts(product)
    {
      this.itemClick.push(product.name);
      this.setState({ itemClick: this.state.itemClick });
    }
    minusProducts(product)
    {
        var index = this.itemClick.indexOf(product.name)
        this.itemClick.splice(index, 1);
        this.setState({ itemClick: this.state.itemClick });
    }
    
    componentWillReceiveProps(nextProps) {
        this.createDataSourece(nextProps);
    }
    onCheckOutButtonPress(){
        Actions.cartList({cartItems: this.itemClick});
    }

    createDataSourece({ products }) {
        this.arrayholder = products;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(products);
   }
   renderRow(product){
        return <ListItem product={product} add={() => this.addProducts(product)} minus={() => this.minusProducts(product)} />;
   }
    render() {
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
       
        return (
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
                <Button onPress={this.onCheckOutButtonPress.bind(this)}>
                   Check Out
                </Button>
            </CardSection>
           </View>
        );
    }
}

const mapStateToProps = state => {
const products = _.map(state.products, (val, uid) => {
        return {...val, uid};
    });
    return { products };
}

export default connect(mapStateToProps,{ productFetch })(ProductList);
