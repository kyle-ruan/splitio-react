import React, { useState, useEffect } from 'react';
import { SplitIOContext } from './SplitIOContext';
import { useSplitClient } from './hooks/use-split-client';

/**
 * @param {string} splitKey                 internal user id, or the organisation id that the user belongs to
 * @param {string} authorizationKey         your split api key
 * @param {string[]} splits                 split names
 * @param {Object} [splitFactory]           [optional] splitFactory instance, required if using cdn, which will expose splitio globally
 * @param {Object} attributes               user attributes to determine split treatment value
 */
const SplitIOProvider = ({
  splitKey,
  authorizationKey,
  splits,
  attributes,
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