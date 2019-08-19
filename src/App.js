import React from 'react';

import './App.css';
import { SplitIOProvider } from './lib';

const App = () => {
  return (
    <SplitIOProvider
      splitKey={'CUSTOMER_ID'}
      authorizationKey={'SPLIT_IO_API_KEY'}
      attributes={{ }}
      splits={[]}
    >
      <div>Split IO</div>
    </SplitIOProvider>
  );
}

export default App;
