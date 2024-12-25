/* eslint-disable react/no-deprecated */
/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';

import App from './components/app/App';
import './style/style.scss';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <App />
  );
