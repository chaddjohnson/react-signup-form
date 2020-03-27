import { useState, useCallback, useEffect } from 'react';

export const useForm = (fields, onSubmit) => {
  const [dirty, setDirty] = useState(false);
  const [valid, setValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const getFieldValues = useCallback(() => {
    const fieldNames = Object.keys(fields);

    return fieldNames.reduce(
      (map, fieldName) => ({
        ...map,
        [fieldName]: fields[fieldName].value
      }),
      {}
    );
  }, [fields]);

  const submit = useCallback(
    async event => {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      setSubmitting(true);

      const formValues = getFieldValues();
      const result = await onSubmit(formValues);

      setSubmitting(false);

      return result;
    },
    [getFieldValues, onSubmit]
  );

  useEffect(() => {
    const fieldsData = Object.values(fields);
    const hasDirtyFields = fieldsData.some(field => field.dirty);
    const hasErrors = fieldsData.some(field => !!field.error);

    setDirty(hasDirtyFields);
    setValid(!hasErrors);
  }, [fields]);

  return { fields, dirty, valid, submit, submitting };
};
