import { useState, useEffect } from 'react';

const useSplitClient = ({
  key,
  authorizationKey,
  splitFactory
}) => {
  const [splitClient, setSplitClient] = useState();

  useEffect(() => {
    const initSplitClient = async () => {
      if (!key) {
        return;
      }

      if (!splitFactory) {
        splitFactory = require('@splitsoftware/splitio').SplitFactory;
      }

      // eslint-disable-next-line no-undef
      const client = splitFactory({
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
