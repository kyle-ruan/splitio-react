import React, { useState, useEffect } from 'react';
import { SplitIOContext } from './SplitIOContext';
import { useSplitClient } from './hooks/use-split-client';

const SplitIOProvider = ({
  splitKey,
  authorizationKey,
  attributes,
  splits,
  splitFactory,
  children
}) => {
  const client = useSplitClient({
    key: splitKey,
    authorizationKey,
    splitFactory
  });
  const [treatments, setTreatments] = useState({});

  useEffect(() => {
    if (!client) {
      return;
    }

    const values = client.getTreatments(
      splits,
      attributes
    );
    setTreatments(values);
  }, [JSON.stringify(attributes), splitKey, client]);

  return (
    <SplitIOContext.Provider value={{ treatments, client }}>
      {children}
    </SplitIOContext.Provider>
  )
};

export { SplitIOProvider };