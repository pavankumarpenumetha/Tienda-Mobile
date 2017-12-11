import React from 'react';
import { Alert } from 'react-native';
import { Actions,ActionConst } from 'react-native-router-flux';
import { STORE_UPDATE, STORE_CREATE,STORE_FETCH_SUCCESS,STORE_SAVE_SUCCESS,STORE_DELETE_SUCCESS } from './type';
import {URL} from '../const';

export const storeUpdate = ({ prop, value }) => {
    return {
      type: STORE_UPDATE,
      payload: { prop, value }
    };
  };

export const storeCreate = ({  id, store_name, description }) => {
   return (dispatch) => {
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
          }
        fetch(URL+'query=mutation%7B%0A%20%20storeCreate(store_name%3A%22'+store_name+'%22%2C%20location%3A%221%22%2C%20description%3A%22'+description+'%22)%0A%20%20%20%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%0A%20%20%0A%7D', data)
        .then(response => response.json())  // promise
        .then(() => {
          dispatch({ type: STORE_CREATE});
          Actions.main();
        });
        
    };
};
export const storeFretch = () => {
    
    return(dispatch) => {
        fetch(URL+'query=query%7B%0A%20%20stores%7B%0A%20%20%20%20id%2C%0A%20%20%20%20store_name%2C%0A%20%20%20%20description%0A%09%7D%0A%7D')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.data.stores)
          dispatch({type:STORE_FETCH_SUCCESS,payload:responseJson.data.stores})
        })
        .catch((error) => {
          console.error(error);
        });
    }
}

export const storeSave = ({ id, store_name, description, uid}) => {
  return (dispatch) => {
    let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
      }
    fetch(URL+'query=mutation%20%7B%0A%20%20storeUpdate(id%3A%20%22'+uid+'%22%2C%20store_name%3A%20%22'+store_name+'%22%2C%20location%3A%20%222%22%2C%20description%3A%20%22'+description+'%22)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D', data)
    .then(response => response.json())  // promise
    .then(() => {
      dispatch({ type: STORE_SAVE_SUCCESS});
      Actions.main();
    });
    
};
}

export const storeDelete = ({ uid }) => {
  return (dispatch) => {
    let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
      }
    fetch(URL+'query=mutation%20%7B%0A%20%20storeDelete(id%3A%20%22'+uid+'%22)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D', data)
    .then(response => response.json())  // promise
    .then(json => dispatch({ type: STORE_DELETE_SUCCESS}));
    Actions.main();
};
}

