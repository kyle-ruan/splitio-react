import get from 'lodash/get';
import pick from 'lodash/pick';
import { useState, useEffect, useContext } from 'react';
import { SplitIOContext } from '../SplitIOContext';

const useSplitTreatments = treatments => {
  const [values, setValues] = useState();
  const splitContext = useContext(SplitIOContext);

  useEffect(() => {
    const treatmentValues = pick(
      get(splitContext, 'treatments'),
      treatments
    );

    setValues(treatmentValues);
  }, [treatments, splitContext]);

  return values;
};

export { useSplitTreatments };
