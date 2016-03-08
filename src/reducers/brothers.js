import { FETCH_BROTHERS } from '../actions/index';

const DEFAULT_STATE = { brothers: [] };

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_BROTHERS:
            return {...state, brothers: action.payload.data.brothers};
        default:
            return state;
    }
}
