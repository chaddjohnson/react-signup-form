import { useState, useEffect } from 'react';

export const useForm = fields => {
  const [dirty, setDirty] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const fieldsData = Object.values(fields);
    const hasDirtyFields = fieldsData.some(field => field.dirty);
    const hasErrors = fieldsData.some(field => field.error);

    setDirty(hasDirtyFields);
    setValid(!hasErrors);
  }, [fields]);

  return { fields, dirty, valid };
};
