# splitio-react

### Dependency
This package assumes you would import splitio use CDN (recommended in docs https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK).
```javascript
<script src="//cdn.split.io/sdk/split-10.8.2.min.js"></script>
```

### Config
```javascript
import { SplitIOProvider } from 'splitio-react';

const App = () => (
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
    <Main />
  </SplitIOProvider>
)
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
