import { expect, renderComponent } from '../../test_helper'
import BrotherPanel from '../../../src/components/activeBrothers/brotherPanel'

describe('Brother Panel', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(BrotherPanel);
  });

  it('Has the brother-panel class', () => {
    expect(component).to.have.class('brother-panel');
  });

  it('Contains an <img> tag', () => {
    expect(component.find('img')).to.exist;
  });

  describe('renders the correct HTML for given props', () => {
    beforeEach(() => {
      const props = {
        bro: {
          'first name': 'Piotr',
          'last name': 'Romanowski',
          'position': 'web&tech',
          'img': 'http://loremflickr.com/320/240',
          'class': 'BH'
        }
      };

      component = renderComponent(BrotherPanel, props);
    });

    it('Checks that name and class are rendered correctly', () => {
      expect(component.find('p')).to.exist;
      expect(component.find('p').eq(1)).to.exist;
      expect(component.find('p').eq(1)).to.contain('Piotr | BH');
    });
  });
})
