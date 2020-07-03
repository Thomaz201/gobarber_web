import React from 'react';

import SignIn from './pages/Signin/index';
// import SignUp from './pages/SignUp/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
