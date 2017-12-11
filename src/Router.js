import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import Login from './components/Login';
import StoreList from './components/StoreList';
import StoreCreate from './components/StoreCreate';
import StoreEdit from './components/StoreEdit';
import ProductsList from './components/ProductsList';
import CartList from './components/CartList';
import OrderList from './components/OrderList';

export default class RouterComponenet extends Component {
    
    constructor(){
        super();
        this.state={ isUserLogin: false};
    }
    componentWillMount()
    {
        try {
            AsyncStorage.getItem('@UserLogined:key', (err, result) => {
                if(result != null)
                {
                    Actions.main();
                }
                else{
                    Actions.auth();
                }
                
              });
          } catch (error) {
            console.log('No Value found');
          }
    }
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }} >
            <Scene key="main">
                <Scene
                    onRight={() => Actions.createStore()}
                    rightTitle='Add'
                    key="storeList" component={StoreList} title="Stores"
               />
            </Scene>
            <Scene key="createStore" component={StoreCreate} title="Store Create" />
            <Scene key="edit" component={StoreEdit} title="Store Edit" />
            <Scene key="productList" component={ProductsList} title = "Products" />
            <Scene key="cartList">
            <Scene 
                onLeft = {() => Actions.pop()}
                leftTitle = "Cancel"
                key="cart" component={CartList} title="Cart" />
                <Scene 
                onRight = {() => Actions.main()}
                rightTitle = "Done"
                key="orderList" component={OrderList} title="Orders placed Successfully" />
            </Scene>
            <Scene key="auth">
                <Scene key="login" component={Login} title="Please Login" />
            </Scene>
            </Router>
        );
    }
};

const styles = {
    backButton: {
        fontSize: 23,
      }
};



