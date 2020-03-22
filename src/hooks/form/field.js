import { useState, useCallback, useMemo, useEffect } from 'react';

export const useField = config => {
  const validators = config.validates;

  const [state, setState] = useState({
    value: config.value,
    dirty: false,
    touched: false,
    error: undefined
  });

  const validate = useCallback(() => {
    const errors = validators.map(validator => validator(state.value));
    const firstError = errors[0];

    setState(prevState => ({
      ...prevState,
      error: firstError
    }));
  }, [validators, state.value]);

  // Update state on change.
  const onChange = useCallback(event => {
    setState(prevState => ({
      ...prevState,
      value: event.target.value,
      dirty: true,
      touched: true
    }));
  }, []);

  // Run validation on blur.
  const onBlur = useCallback(() => {
    validate();
  }, [validate]);

  // Return a memoized set of properties that may be applied to the field.
  const field = useMemo(
    () => ({
      ...state,
      onChange,
      onBlur,
      validate
    }),
    [state, onChange, onBlur, validate]
  );

  // Run validation on value change.
  useEffect(
    () => {
      validate();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value]
  );

  return field;
};
