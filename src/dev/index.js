import React from 'react';
import ReactDOM from 'react-dom';
import { BayonFetchProvider } from '@bayon/fetch';
import { ToastProvider, ErrorScreen } from '@bayon/commons';
import { BayonI18NextProvider } from '@bayon/i18n';
import { AuthenticationProvider, ErrorBoundary } from '@bayon/smarts';

import App from './App';
import './index.css';

const keycloakConfig = {
  realm: 'SAJ6',
  url: 'http://identity-mp-master.saj6.softplan.com.br/auth',
  clientId: 'saj6-mp',
};

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider {...keycloakConfig}>
      <ErrorBoundary
        applicationName="Bayon Screen"
        errorComponent={() => <ErrorScreen error={500} />}
      >
        <BayonFetchProvider
          uri="http://mp-master.saj6.softplan.com.br/apollo"
          apm={{
            enabled: false,
          }}
        >
          <ToastProvider maxSnack={3}>
            <BayonI18NextProvider url="https://resources-saj6.s3-sa-east-1.amazonaws.com/{{lng}}/{{ns}}.json">
              <App />
            </BayonI18NextProvider>
          </ToastProvider>
        </BayonFetchProvider>
      </ErrorBoundary>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
