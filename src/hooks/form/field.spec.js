import React from 'react';
import { shallow } from 'enzyme';
import { useField } from './field';

describe('useField hook', () => {
  const TestField = ({ config }) => {
    const field = useField(config);

    return (
      <>
        <label>
          Test field
          <input
            id="test-field"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        </label>
        <div>{field.error}</div>
      </>
    );
  };

  // it('should validate on change', () => {
  //   const wrapper = shallow(
  //     <TestField
  //       config={{
  //         value: 'test value',
  //         validates: [value => (value.length < 6 ? 'invalid' : '')]
  //       }}
  //     />
  //   );

  //   wrapper.find('input').prop('onChange')({
  //     target: {
  //       value: 'test'
  //     }
  //   });
  //   expect(wrapper.find('div').text()).toBe('invalid');
  // });

  it('should validate on blur', () => {
    const wrapper = shallow(
      <TestField
        config={{
          value: 'test value',
          validates: [() => 'invalid']
        }}
      />
    );

    wrapper.find('input').prop('onBlur')();
    expect(wrapper.find('div').text()).toBe('invalid');
  });
});
