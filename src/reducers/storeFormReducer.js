import { STORE_UPDATE, STORE_CREATE, STORE_SAVE_SUCCESS } from '../actions/type';

const INITIAL_STATE = {
    id: '',
    store_name:'',
    description:''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
        case STORE_CREATE:
        return INITIAL_STATE;
        case STORE_SAVE_SUCCESS:
        return INITIAL_STATE;
        default:
        return state;
    }
};
