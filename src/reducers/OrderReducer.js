import {
    ORDER_FETCH_SUCCESS
} from '../actions/type';

const  INITIAL_STATE = {};


export default ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ORDER_FETCH_SUCCESS:
        return action.payload;
        default:
        return state;
    }
};