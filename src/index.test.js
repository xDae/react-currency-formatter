import React from 'react';
import { render } from 'enzyme';
import Currency from './index';

it('renders without crashing', () => {
  const wrapper = render(
    <Currency
      quantity={89}
    />
  );
  // console.log(wrapper.debug());
  expect(wrapper.text()).toEqual('$89.00');
});
