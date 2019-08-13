import { useState, useEffect } from 'react';

const useSplitClient = ({
  key,
  authorizationKey
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
          key
        }
      }).client();

      client.on(client.Event.SDK_READY, () => {
        setSplitClient(client);
      });
    };

    initSplitClient();
  }, [key]);

  return splitClient;
};

export { useSplitClient };
