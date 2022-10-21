import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { AvatarProvider} from './contexts/AvatarContext';
import { ProgressProvider } from './contexts/ProgressContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <ProgressProvider>
    <AvatarProvider>
    <AuthProvider>
     
    <App />
    </AuthProvider>
    </AvatarProvider>
    </ProgressProvider>
  </React.StrictMode>
);


