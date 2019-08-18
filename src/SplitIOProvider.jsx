import React, { useState, useEffect } from 'react';
import { SplitIOContext } from './SplitIOContext';
import { useInitSplitClient } from './hooks/use-init-split-client';

/**
 * @param {string} splitKey                 internal user id, or the organisation id that the user belongs to
 * @param {string} authorizationKey         your split api key
 * @param {string[]} splits                 split names
 * @param {Object} attributes               user attributes to determine split treatment value
 */
const SplitIOProvider = ({
  splitKey,
  authorizationKey,
  trafficType,
  labelsEnabled = true,
  splits,
  attributes,
  children,
  ...options
}) => {
  const client = useInitSplitClient({
    key: splitKey,
    authorizationKey,
    trafficType,
    labelsEnabled,
    ...options
  });
  const [treatments, setTreatments] = useState({});

  const stringifedAttributes = JSON.stringify(attributes);

  useEffect(() => {
    if (!client) {
      return;
    }

    const values = client.getTreatments(
      splits,
      attributes
    );
    setTreatments(values);
  }, [stringifedAttributes, splitKey, client]);

  return (
    <SplitIOContext.Provider value={{ treatments, client }}>
      {children}
    </SplitIOContext.Provider>
  )
};

export { SplitIOProvider };