import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { AvatarProvider} from './contexts/AvatarContext';
import { ProgressProvider } from './contexts/ProgressContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ProgressProvider>
    <AvatarProvider>
    
     
    <App />
    
    </AvatarProvider>
    </ProgressProvider>
    </AuthProvider>
  </React.StrictMode>
);


