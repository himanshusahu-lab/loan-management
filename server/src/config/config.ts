export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'URgkLHHgDIYINi_n2hN7x',
    client_secret:
      'psDEx9iS2-_K_S7BQRMQQ1RKe7S9llUfM8AJcF6-jWRGHnGY2QON-Q2CfXvzr7jLBznGeGu7CmiVbEYBurmqUA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
