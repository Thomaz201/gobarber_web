import React from 'react';

import SignIn from './pages/Signin/index';
// import SignUp from './pages/SignUp/index';

import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
