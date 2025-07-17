import './style.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
