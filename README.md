# splitio-react

### Config
```javascript
import { SplitIOProvider } from 'splitio-react';

<SplitIOProvider
  splitKey={'CUSTOMER_ID'}
  authorizationKey={'SPLIT_IO_API_KEY'}
  attributes={{
    attrA,
    attrB,
    attrC,
    ...otherAttrs
  }}
  splits={[SPLIT_NAMES]}
>
  <App />
</SplitIOProvider>
```

### Usage
```javascript
import { useSplitTreatment } from 'splitio-react';

const SplitView = () => {
  const on = useSplitTreatment('SPLIT_NAME');
  const client = useSplitClient();

  useEffect(() => {
    if (on) {
      client.track('traffic type', 'event');
    }
  }, [on]);
  return on ? <div>ON</div> : <div>OFF</div>
};
```