import { FETCH_BROTHERS } from '../actions/index';

const DEFAULT_STATE = {
  brothers: [],
  classes: [],
  homepageImages: [],
  news: []
};

export default function(state = DEFAULT_STATE, action = {}) {
    switch (action.type) {
        case FETCH_BROTHERS:
            return {...state,
              brothers: action.payload.brothers,
              homepageImages: action.payload.homepageImages,
              classes: action.payload.classes,
              news: action.payload.news
            };
        default:
            return state;
    }
}
