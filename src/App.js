import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from "redux/store";
import MainRoutes from "route";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
