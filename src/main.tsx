import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { AuthProvider } from './hooks/auth';
import { ThemeProvider } from './hooks/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
