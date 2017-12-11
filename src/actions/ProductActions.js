import React from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PRODUCT_FETCH_SUCCESS } from './type';
import {URL} from '../const';

export const productFetch = () => {
    
    return(dispatch) => {
        fetch(URL+'query=%7B%0A%20materials%7B%0A%20%20id%2C%0A%20%20name%2C%0A%20%20description%0A%09%7D%0A%7D')
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch({type:PRODUCT_FETCH_SUCCESS,payload:responseJson.data.materials})
        })
        .catch((error) => {
          console.error(error);
        });
    }
}
