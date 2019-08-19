import get from 'lodash/get';
import { useContext } from 'react';
import { SplitIOContext } from '../SplitIOContext';

const useSplitClient = () => {
  const splitContext = useContext(SplitIOContext);

  return get(splitContext, 'client');
};

export { useSplitClient };
