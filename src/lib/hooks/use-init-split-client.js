/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

const useInitSplitClient = ({
  key,
  authorizationKey,
  trafficType,
  labelsEnabled = true,
  startup,
  scheduler,
  storage
}) => {
  const [splitClient, setSplitClient] = useState();
  const hasSplitLoaded = !!splitio;

  useEffect(() => {
    const initSplitClient = async () => {
      if (!key || !splitio) {
        return;
      }

      const client = splitio({
        core: {
          authorizationKey,
          key,
          trafficType,
          labelsEnabled
        },
        startup,
        scheduler,
        storage
      }).client();

      client.on(client.Event.SDK_READY, () => {
        setSplitClient(client);
      });
    };

    initSplitClient();
  }, [key, hasSplitLoaded, authorizationKey, trafficType]);

  return splitClient;
};

export { useInitSplitClient };
