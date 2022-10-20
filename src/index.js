import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { AvatarProvider} from './contexts/AvatarContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <AvatarProvider>
    <AuthProvider>
     
    <App />
    </AuthProvider>
    </AvatarProvider>
  </React.StrictMode>
);


