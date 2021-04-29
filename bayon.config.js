export const configs = {
  i18n: {
    $url:
      'https://resources-saj6.s3-sa-east-1.amazonaws.com/react/{{lng}}/{{ns}}.json',
  },
  keycloak: {
    realm: 'SAJ-TJ-MASTER-PG',
    clientId: 'saj',
    url: 'https://identity-platform.softplan.io/auth',
  },
  apollo: {
    url: 'https://tj-master-pg.softplan.io/apollo',
    apm: {
      serviceName: 'bayon-painel-core',
      serverUrl: 'https://apm-unj.softplan.com.br',
      pageLoadTransactionName: 'bayon-painel-core',
      environment: 'Development',
      enabled: false,
    },
    intercept: {
      error: true,
    },
    webSocket: {
      uri: ''
    }
  },
};

export default configs;
