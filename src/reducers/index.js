import { combineReducers } from 'redux';
import StoreFormReducer from './storeFormReducer';
import StoreReducer from './storeReducer';
import ProductReducer from './productReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
    storeForm: StoreFormReducer,
    stores: StoreReducer,
    products: ProductReducer,
    orders: OrderReducer
});