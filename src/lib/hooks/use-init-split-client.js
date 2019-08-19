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

  useEffect(() => {
    const initSplitClient = async () => {
      if (!key) {
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
  }, [key]);

  return splitClient;
};

export { useInitSplitClient };
