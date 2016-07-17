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
})
