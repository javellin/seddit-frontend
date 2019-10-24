import React from 'react';
import Posts from 'pages/Posts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Posts/>
    </div>
  );
}

export default App;
