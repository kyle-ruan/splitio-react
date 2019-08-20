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
  const hasSplitLoaded = typeof splitio !== 'undefined';

  useEffect(() => {
    const initSplitClient = async () => {
      if (!key || !hasSplitLoaded) {
        return;
      }

      // eslint-disable-next-line no-undef
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
  }, [key, hasSplitLoaded]);

  return splitClient;
};

export { useInitSplitClient };
