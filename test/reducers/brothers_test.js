import { expect } from '../test_helper'
import brothersReducer from '../../src/reducers/brothers'
import { FETCH_BROTHERS } from '../../src/actions/index'

describe('Brothers Reducer', () => {
  it('Has the correct default state', () => {
    const defaultState = {
      brothers: [],
      classes: [],
      homepageImages: [],
      news: []
    };

    expect(brothersReducer()).to.eql(defaultState);
  });

  it('Updates the state accordingly to the firebase json object', () => {
    const payload = {
      brothers: [{name: "Piotr"}],
      classes: ["www.someimage.com/image.jpg"],
      homepageImages: [],
      news: []
    }

    expect(brothersReducer({}, { type: FETCH_BROTHERS, payload })).to.eql(payload);
  });
})
