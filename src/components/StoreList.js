import _ from 'lodash';
import React, { Component } from 'react';
import {ListView, ActivityIndicator,View,TextInput,Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { storeFretch } from '../actions';
import ListItem from './ListView';

class StoreList extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            text: '',
        }
        this.arrayholder = [] ;
    }
    componentDidMount() {
        this.setState({isLoading: false});
        this.props.storeFretch();
        this.createDataSourece(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSourece(nextProps);
    }

    SearchFilterFunction(text){
        const newData = this.arrayholder.filter(function(item){
            const itemData = item.store_name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(newData);
        this.setState({text: text})
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSourece(nextProps);
    }

    createDataSourece({ stores }) {
        this.arrayholder = stores;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(stores);
   }
   renderRow(storeItem){
        return <ListItem storeItem={storeItem} />;
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
                <TextInput style={styles.searchStyle}
                onChangeText={(text) => this.SearchFilterFunction(text)}
                value={this.state.text}
                underlineColorAndroid='transparent'
                placeholder="Search Here"
                />
                <ScrollView>
                <ListView
                    dataSource={this.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow = { this.renderRow }
                    enableEmptySections={true}
                />
                </ScrollView>
           </View>
        );
    }
}


const styles = {
    searchStyle:{
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft:5,
        marginRight:5
    }
}


const mapStateToProps = state => {
const stores = _.map(state.stores, (val, uid) => {
        return {...val, uid};
    });
    return { stores };
}

export default connect(mapStateToProps,{ storeFretch })(StoreList);
