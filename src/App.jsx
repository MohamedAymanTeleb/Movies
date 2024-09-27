import { RouterProvider } from 'react-router-dom';
import { Router } from './RouterConfig';
import { LanguageProvider } from './Contexts/langContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './Store/Store';
function App() {

  const [lang, setLang] = useState("en");
  return (<>
    <Provider store={Store}>
      <LanguageProvider value={{ lang, setLang }}>
        <RouterProvider router={Router} />
      </LanguageProvider>
    </Provider>
  </>);
};
export default App;