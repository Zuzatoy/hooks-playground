import { FETCH_POSTS, NEW_POST } from '../actions/types';


const initialState = {
    items: [],
    item: {},
    name: '',
    success: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                  items: [ ...state.items, action.payload],
                  item: action.payload,
              };
        
        default:
            return state;
    }
}
