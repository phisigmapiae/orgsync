import { FETCH_BROTHERS } from '../actions/index';

const DEFAULT_STATE = { brothers: [], homepageImages: [], news: [] };

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_BROTHERS:
            return {...state,
              brothers: action.payload.data.brothers,
              homepageImages: action.payload.data.homepageImages,
              news: action.payload.data.news
            };
        default:
            return state;
    }
}
