import { get } from 'lodash';
import { useState, useEffect, useContext } from 'react';
import { SplitIOContext } from '../SplitIOContext';

const useSplitTreatment = treatment => {
  const [value, setValue] = useState(false);
  const splitContext = useContext(SplitIOContext);

  useEffect(() => {
    const treatmentValue =
      get(splitContext, `treatments.${treatment}`) || 'off';
    setValue(treatmentValue === 'on');
  }, [treatment, splitContext]);

  return value;
};

export { useSplitTreatment };
