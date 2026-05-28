// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_3dqpkj044fxfDxYu from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_i8dtcSzaXRl7h7xE(bh, parentSpanInst);
          //appendnew_next_sd_gBUp81rwNmD8p9MD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gBUp81rwNmD8p9MD');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_PC69f0Qkaqkxvphz(bh, parentSpanInst);
          //appendnew_next_sd_fn8zhlCFMEU1jKxw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fn8zhlCFMEU1jKxw');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_WWMFQyx9OfEoLDBe(bh, parentSpanInst);
          //appendnew_next_sd_sI0DCBtgElb3gBls
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sI0DCBtgElb3gBls');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_pkm3T7nxj5leM17B(bh, parentSpanInst);
          //appendnew_next_sd_PmyLe4pwKWAmBVJn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PmyLe4pwKWAmBVJn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_mf1S4mnP9N0jf8wu(bh, parentSpanInst);
          //appendnew_next_sd_jWCeFtuW19auuWPg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jWCeFtuW19auuWPg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ntuj6bbpZvMWXgOx(bh, parentSpanInst);
          //appendnew_next_sd_hmLj7Gnd9DhBAQQc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hmLj7Gnd9DhBAQQc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_fCT77cwKQzHY1cTz(bh, parentSpanInst);
          //appendnew_next_sd_UcTdbMtdGDkNVOGs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UcTdbMtdGDkNVOGs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_WWMFQyx9OfEoLDBe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WWMFQyx9OfEoLDBe',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KTALyW6F5tdi9l0v(bh, parentSpanInst);
      //appendnew_next_sd_WWMFQyx9OfEoLDBe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WWMFQyx9OfEoLDBe',
        spanInst,
        'sd_WWMFQyx9OfEoLDBe'
      );
    }
  }

  async sd_KTALyW6F5tdi9l0v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KTALyW6F5tdi9l0v',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_c0oTkZyIohBxNpbD(bh, parentSpanInst);
      } else {
        bh = await this.sd_dD7wOdgwreFsjDJf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KTALyW6F5tdi9l0v',
        spanInst,
        'sd_KTALyW6F5tdi9l0v'
      );
    }
  }

  async sd_c0oTkZyIohBxNpbD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c0oTkZyIohBxNpbD',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eQRMjQyAZO4ivWZ6(bh, parentSpanInst);
      //appendnew_next_sd_c0oTkZyIohBxNpbD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c0oTkZyIohBxNpbD',
        spanInst,
        'sd_c0oTkZyIohBxNpbD'
      );
    }
  }

  async sd_eQRMjQyAZO4ivWZ6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eQRMjQyAZO4ivWZ6',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Cv0zx6hLSy8dHX2P(bh, parentSpanInst);
      //appendnew_next_sd_eQRMjQyAZO4ivWZ6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eQRMjQyAZO4ivWZ6',
        spanInst,
        'sd_eQRMjQyAZO4ivWZ6'
      );
    }
  }

  async sd_Cv0zx6hLSy8dHX2P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cv0zx6hLSy8dHX2P',
      parentSpanInst
    );
    try {
      const sd_3dqpkj044fxfDxYuInstance: sd_3dqpkj044fxfDxYu.idsutil =
        sd_3dqpkj044fxfDxYu.idsutil.getInstance();
      let outputVariables =
        await sd_3dqpkj044fxfDxYuInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XjPGUCUcRfMuqpbY(bh, parentSpanInst);
      //appendnew_next_sd_Cv0zx6hLSy8dHX2P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cv0zx6hLSy8dHX2P',
        spanInst,
        'sd_Cv0zx6hLSy8dHX2P'
      );
    }
  }

  async sd_XjPGUCUcRfMuqpbY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XjPGUCUcRfMuqpbY',
      parentSpanInst
    );
    try {
      const sd_3dqpkj044fxfDxYuInstance: sd_3dqpkj044fxfDxYu.idsutil =
        sd_3dqpkj044fxfDxYu.idsutil.getInstance();
      let outputVariables =
        await sd_3dqpkj044fxfDxYuInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FP85BFGerag9h6Gi(bh, parentSpanInst);
      //appendnew_next_sd_XjPGUCUcRfMuqpbY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XjPGUCUcRfMuqpbY',
        spanInst,
        'sd_XjPGUCUcRfMuqpbY'
      );
    }
  }

  async sd_FP85BFGerag9h6Gi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FP85BFGerag9h6Gi',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_k1ZMH5ahFuo4SKqL(bh, parentSpanInst);
      //appendnew_next_sd_FP85BFGerag9h6Gi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FP85BFGerag9h6Gi',
        spanInst,
        'sd_FP85BFGerag9h6Gi'
      );
    }
  }

  async sd_k1ZMH5ahFuo4SKqL(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k1ZMH5ahFuo4SKqL');
    }
  }

  async sd_dD7wOdgwreFsjDJf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dD7wOdgwreFsjDJf',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ToqoK53YjoxMXHHd(bh, parentSpanInst);
      //appendnew_next_sd_dD7wOdgwreFsjDJf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dD7wOdgwreFsjDJf',
        spanInst,
        'sd_dD7wOdgwreFsjDJf'
      );
    }
  }

  async sd_ToqoK53YjoxMXHHd(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ToqoK53YjoxMXHHd');
    }
  }

  async sd_i8dtcSzaXRl7h7xE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i8dtcSzaXRl7h7xE',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_g6thixtKh1rlX4Xx(bh, parentSpanInst);
      //appendnew_next_sd_i8dtcSzaXRl7h7xE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i8dtcSzaXRl7h7xE',
        spanInst,
        'sd_i8dtcSzaXRl7h7xE'
      );
    }
  }

  async sd_g6thixtKh1rlX4Xx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g6thixtKh1rlX4Xx',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g6thixtKh1rlX4Xx',
        spanInst,
        'sd_g6thixtKh1rlX4Xx'
      );
    }
  }

  async sd_pkm3T7nxj5leM17B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pkm3T7nxj5leM17B',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uUFe9kLgnnWkcPbM(bh, parentSpanInst);
      //appendnew_next_sd_pkm3T7nxj5leM17B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pkm3T7nxj5leM17B',
        spanInst,
        'sd_pkm3T7nxj5leM17B'
      );
    }
  }

  async sd_uUFe9kLgnnWkcPbM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uUFe9kLgnnWkcPbM',
      parentSpanInst
    );
    try {
      const sd_3dqpkj044fxfDxYuInstance: sd_3dqpkj044fxfDxYu.idsutil =
        sd_3dqpkj044fxfDxYu.idsutil.getInstance();
      let outputVariables =
        await sd_3dqpkj044fxfDxYuInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SQZXBsv5kVmtzug9(bh, parentSpanInst);
      //appendnew_next_sd_uUFe9kLgnnWkcPbM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uUFe9kLgnnWkcPbM',
        spanInst,
        'sd_uUFe9kLgnnWkcPbM'
      );
    }
  }

  async sd_SQZXBsv5kVmtzug9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SQZXBsv5kVmtzug9',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zfkScKlzB3rSl8fC(bh, parentSpanInst);
      //appendnew_next_sd_SQZXBsv5kVmtzug9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SQZXBsv5kVmtzug9',
        spanInst,
        'sd_SQZXBsv5kVmtzug9'
      );
    }
  }

  async sd_zfkScKlzB3rSl8fC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zfkScKlzB3rSl8fC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Aj36Z3zyCmx93Sax(bh, parentSpanInst);
      //appendnew_next_sd_zfkScKlzB3rSl8fC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zfkScKlzB3rSl8fC',
        spanInst,
        'sd_zfkScKlzB3rSl8fC'
      );
    }
  }

  async sd_Aj36Z3zyCmx93Sax(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Aj36Z3zyCmx93Sax',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DDWlXoeiAmH5jHRa(bh, parentSpanInst);
      } else {
        bh = await this.sd_AtVzY8sNAVaYAj6m(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Aj36Z3zyCmx93Sax',
        spanInst,
        'sd_Aj36Z3zyCmx93Sax'
      );
    }
  }

  async sd_DDWlXoeiAmH5jHRa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DDWlXoeiAmH5jHRa',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mC1vGt894NaEhAU6(bh, parentSpanInst);
      //appendnew_next_sd_DDWlXoeiAmH5jHRa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DDWlXoeiAmH5jHRa',
        spanInst,
        'sd_DDWlXoeiAmH5jHRa'
      );
    }
  }

  async sd_mC1vGt894NaEhAU6(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mC1vGt894NaEhAU6');
    }
  }

  async sd_AtVzY8sNAVaYAj6m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AtVzY8sNAVaYAj6m',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NxpQUBG6WBf11RC3(bh, parentSpanInst);
      //appendnew_next_sd_AtVzY8sNAVaYAj6m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AtVzY8sNAVaYAj6m',
        spanInst,
        'sd_AtVzY8sNAVaYAj6m'
      );
    }
  }

  async sd_NxpQUBG6WBf11RC3(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NxpQUBG6WBf11RC3');
    }
  }

  async sd_mf1S4mnP9N0jf8wu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mf1S4mnP9N0jf8wu',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_b0NPZNZhkMHefzAB(bh, parentSpanInst);
      //appendnew_next_sd_mf1S4mnP9N0jf8wu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mf1S4mnP9N0jf8wu',
        spanInst,
        'sd_mf1S4mnP9N0jf8wu'
      );
    }
  }

  async sd_b0NPZNZhkMHefzAB(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b0NPZNZhkMHefzAB');
    }
  }

  async sd_SasnM2YBu5IA774l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SasnM2YBu5IA774l',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SasnM2YBu5IA774l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SasnM2YBu5IA774l',
        spanInst,
        'sd_SasnM2YBu5IA774l'
      );
    }
  }

  async sd_ntuj6bbpZvMWXgOx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ntuj6bbpZvMWXgOx',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4HDgCWS4S3SbsU7Z(bh, parentSpanInst);
      //appendnew_next_sd_ntuj6bbpZvMWXgOx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ntuj6bbpZvMWXgOx',
        spanInst,
        'sd_ntuj6bbpZvMWXgOx'
      );
    }
  }

  async sd_4HDgCWS4S3SbsU7Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4HDgCWS4S3SbsU7Z',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_V1NACY9zNJEeQLaq(bh, parentSpanInst);
      //appendnew_next_sd_4HDgCWS4S3SbsU7Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4HDgCWS4S3SbsU7Z',
        spanInst,
        'sd_4HDgCWS4S3SbsU7Z'
      );
    }
  }

  async sd_V1NACY9zNJEeQLaq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V1NACY9zNJEeQLaq',
      parentSpanInst
    );
    try {
      const sd_3dqpkj044fxfDxYuInstance: sd_3dqpkj044fxfDxYu.idsutil =
        sd_3dqpkj044fxfDxYu.idsutil.getInstance();
      let outputVariables =
        await sd_3dqpkj044fxfDxYuInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1GplrK3XM1iPTtQy(bh, parentSpanInst);
      //appendnew_next_sd_V1NACY9zNJEeQLaq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V1NACY9zNJEeQLaq',
        spanInst,
        'sd_V1NACY9zNJEeQLaq'
      );
    }
  }

  async sd_1GplrK3XM1iPTtQy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1GplrK3XM1iPTtQy',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_F4eZbAphMnWL1cBm(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_icw0XkoU3T5uF1BE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1GplrK3XM1iPTtQy',
        spanInst,
        'sd_1GplrK3XM1iPTtQy'
      );
    }
  }

  async sd_F4eZbAphMnWL1cBm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F4eZbAphMnWL1cBm',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_F4eZbAphMnWL1cBm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F4eZbAphMnWL1cBm',
        spanInst,
        'sd_F4eZbAphMnWL1cBm'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UUpF0p460Ocp59Xi(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_UUpF0p460Ocp59Xi(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UUpF0p460Ocp59Xi');
    }
  }

  async sd_icw0XkoU3T5uF1BE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_icw0XkoU3T5uF1BE',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UUpF0p460Ocp59Xi(bh, parentSpanInst);
      //appendnew_next_sd_icw0XkoU3T5uF1BE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_icw0XkoU3T5uF1BE',
        spanInst,
        'sd_icw0XkoU3T5uF1BE'
      );
    }
  }

  async sd_fCT77cwKQzHY1cTz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fCT77cwKQzHY1cTz',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FEHKfw6wMEWAGhv9(bh, parentSpanInst);
      //appendnew_next_sd_fCT77cwKQzHY1cTz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fCT77cwKQzHY1cTz',
        spanInst,
        'sd_fCT77cwKQzHY1cTz'
      );
    }
  }

  async sd_FEHKfw6wMEWAGhv9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FEHKfw6wMEWAGhv9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0nDUaG4nKD5k5mnr(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_B79PV2W2GnQCjBJD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FEHKfw6wMEWAGhv9',
        spanInst,
        'sd_FEHKfw6wMEWAGhv9'
      );
    }
  }

  async sd_0nDUaG4nKD5k5mnr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0nDUaG4nKD5k5mnr',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EPgczwWdQWoHBqqr(bh, parentSpanInst);
      //appendnew_next_sd_0nDUaG4nKD5k5mnr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0nDUaG4nKD5k5mnr',
        spanInst,
        'sd_0nDUaG4nKD5k5mnr'
      );
    }
  }

  async sd_EPgczwWdQWoHBqqr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EPgczwWdQWoHBqqr');
    }
  }

  async sd_B79PV2W2GnQCjBJD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B79PV2W2GnQCjBJD',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zXtMUWi64slWMizH(bh, parentSpanInst);
      //appendnew_next_sd_B79PV2W2GnQCjBJD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B79PV2W2GnQCjBJD',
        spanInst,
        'sd_B79PV2W2GnQCjBJD'
      );
    }
  }

  async sd_zXtMUWi64slWMizH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zXtMUWi64slWMizH',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pGEPk1slWPmnOI77(bh, parentSpanInst);
      //appendnew_next_sd_zXtMUWi64slWMizH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zXtMUWi64slWMizH',
        spanInst,
        'sd_zXtMUWi64slWMizH'
      );
    }
  }

  async sd_pGEPk1slWPmnOI77(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pGEPk1slWPmnOI77',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_z1B5FEUOSXO67qtH(bh, parentSpanInst);
      } else {
        bh = await this.sd_E61Non8WLD4K5xCK(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pGEPk1slWPmnOI77',
        spanInst,
        'sd_pGEPk1slWPmnOI77'
      );
    }
  }

  async sd_z1B5FEUOSXO67qtH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z1B5FEUOSXO67qtH',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pEIiPUNqHRNaULBl(bh, parentSpanInst);
      //appendnew_next_sd_z1B5FEUOSXO67qtH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z1B5FEUOSXO67qtH',
        spanInst,
        'sd_z1B5FEUOSXO67qtH'
      );
    }
  }

  async sd_pEIiPUNqHRNaULBl(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pEIiPUNqHRNaULBl');
    }
  }

  async sd_E61Non8WLD4K5xCK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E61Non8WLD4K5xCK',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XESXOamhoa7SSUjz(bh, parentSpanInst);
      //appendnew_next_sd_E61Non8WLD4K5xCK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E61Non8WLD4K5xCK',
        spanInst,
        'sd_E61Non8WLD4K5xCK'
      );
    }
  }

  async sd_XESXOamhoa7SSUjz(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XESXOamhoa7SSUjz');
    }
  }

  async sd_PC69f0Qkaqkxvphz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PC69f0Qkaqkxvphz',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_s5fTCvYPS0SVLFS7(bh, parentSpanInst);
      //appendnew_next_sd_PC69f0Qkaqkxvphz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PC69f0Qkaqkxvphz',
        spanInst,
        'sd_PC69f0Qkaqkxvphz'
      );
    }
  }

  async sd_s5fTCvYPS0SVLFS7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s5fTCvYPS0SVLFS7',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QaKJt92qza7nQWew(bh, parentSpanInst);
      //appendnew_next_sd_s5fTCvYPS0SVLFS7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s5fTCvYPS0SVLFS7',
        spanInst,
        'sd_s5fTCvYPS0SVLFS7'
      );
    }
  }

  async sd_QaKJt92qza7nQWew(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QaKJt92qza7nQWew',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Qcw731QOZ3P2ZQpk(bh, parentSpanInst);
      //appendnew_next_sd_QaKJt92qza7nQWew
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QaKJt92qza7nQWew',
        spanInst,
        'sd_QaKJt92qza7nQWew'
      );
    }
  }

  async sd_Qcw731QOZ3P2ZQpk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qcw731QOZ3P2ZQpk',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sSKDBJCeAK2EErFV(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_kc6c57cewqeLTwKi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qcw731QOZ3P2ZQpk',
        spanInst,
        'sd_Qcw731QOZ3P2ZQpk'
      );
    }
  }

  async sd_sSKDBJCeAK2EErFV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sSKDBJCeAK2EErFV',
      parentSpanInst
    );
    try {
      const sd_3dqpkj044fxfDxYuInstance: sd_3dqpkj044fxfDxYu.idsutil =
        sd_3dqpkj044fxfDxYu.idsutil.getInstance();
      let outputVariables = await sd_3dqpkj044fxfDxYuInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4gk9GPDa37mRAXGY(bh, parentSpanInst);
      //appendnew_next_sd_sSKDBJCeAK2EErFV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sSKDBJCeAK2EErFV',
        spanInst,
        'sd_sSKDBJCeAK2EErFV'
      );
    }
  }

  async sd_4gk9GPDa37mRAXGY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4gk9GPDa37mRAXGY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_V7yHIFkVevjKitQ3(bh, parentSpanInst);
      } else {
        bh = await this.sd_2S5T6vVMO0V8IiMn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4gk9GPDa37mRAXGY',
        spanInst,
        'sd_4gk9GPDa37mRAXGY'
      );
    }
  }

  async sd_V7yHIFkVevjKitQ3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V7yHIFkVevjKitQ3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BPxWwIZC6JBsTyHK(bh, parentSpanInst);
      //appendnew_next_sd_V7yHIFkVevjKitQ3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V7yHIFkVevjKitQ3',
        spanInst,
        'sd_V7yHIFkVevjKitQ3'
      );
    }
  }

  async sd_BPxWwIZC6JBsTyHK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BPxWwIZC6JBsTyHK',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TftnjIfV0XUFCXKH(bh, parentSpanInst);
      //appendnew_next_sd_BPxWwIZC6JBsTyHK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BPxWwIZC6JBsTyHK',
        spanInst,
        'sd_BPxWwIZC6JBsTyHK'
      );
    }
  }

  async sd_TftnjIfV0XUFCXKH(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TftnjIfV0XUFCXKH');
    }
  }

  async sd_2S5T6vVMO0V8IiMn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2S5T6vVMO0V8IiMn',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dkvRStGRpen79rxg(bh, parentSpanInst);
      } else {
        bh = await this.sd_Zr1CIvmTqYgmlCei(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2S5T6vVMO0V8IiMn',
        spanInst,
        'sd_2S5T6vVMO0V8IiMn'
      );
    }
  }

  async sd_dkvRStGRpen79rxg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dkvRStGRpen79rxg',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xLQaT6S4OkiiyOox(bh, parentSpanInst);
      //appendnew_next_sd_dkvRStGRpen79rxg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dkvRStGRpen79rxg',
        spanInst,
        'sd_dkvRStGRpen79rxg'
      );
    }
  }

  async sd_xLQaT6S4OkiiyOox(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xLQaT6S4OkiiyOox',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Zr1CIvmTqYgmlCei(bh, parentSpanInst);
      //appendnew_next_sd_xLQaT6S4OkiiyOox
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xLQaT6S4OkiiyOox',
        spanInst,
        'sd_xLQaT6S4OkiiyOox'
      );
    }
  }

  async sd_Zr1CIvmTqYgmlCei(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zr1CIvmTqYgmlCei',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zr1CIvmTqYgmlCei',
        spanInst,
        'sd_Zr1CIvmTqYgmlCei'
      );
    }
  }

  async sd_kc6c57cewqeLTwKi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kc6c57cewqeLTwKi',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MunGn6SvKV678OAV(bh, parentSpanInst);
      } else {
        bh = await this.sd_fM6rwdJu17sVAp3x(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kc6c57cewqeLTwKi',
        spanInst,
        'sd_kc6c57cewqeLTwKi'
      );
    }
  }

  async sd_MunGn6SvKV678OAV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MunGn6SvKV678OAV',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TftnjIfV0XUFCXKH(bh, parentSpanInst);
      //appendnew_next_sd_MunGn6SvKV678OAV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MunGn6SvKV678OAV',
        spanInst,
        'sd_MunGn6SvKV678OAV'
      );
    }
  }

  async sd_fM6rwdJu17sVAp3x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fM6rwdJu17sVAp3x',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TftnjIfV0XUFCXKH(bh, parentSpanInst);
      //appendnew_next_sd_fM6rwdJu17sVAp3x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fM6rwdJu17sVAp3x',
        spanInst,
        'sd_fM6rwdJu17sVAp3x'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_F4a6VTIWAiBszksK(bh, parentSpanInst)) ||
      (await this.sd_ChhmpSr7ylhHPRi1(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_F4a6VTIWAiBszksK(bh, parentSpanInst) {
    const nodes = [
      'sd_XjPGUCUcRfMuqpbY',
      'sd_PmyLe4pwKWAmBVJn',
      'sd_uUFe9kLgnnWkcPbM',
      'sd_SQZXBsv5kVmtzug9',
      'sd_pkm3T7nxj5leM17B',
      'sd_Aj36Z3zyCmx93Sax',
      'sd_DDWlXoeiAmH5jHRa',
      'sd_AtVzY8sNAVaYAj6m',
      'sd_mC1vGt894NaEhAU6',
      'sd_NxpQUBG6WBf11RC3',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_SasnM2YBu5IA774l(bh, parentSpanInst);
      //appendnew_next_sd_F4a6VTIWAiBszksK
      return true;
    }
    return false;
  }
  async sd_ChhmpSr7ylhHPRi1(bh, parentSpanInst) {
    const nodes = ['sd_sSKDBJCeAK2EErFV'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_BPxWwIZC6JBsTyHK(bh, parentSpanInst);
      //appendnew_next_sd_ChhmpSr7ylhHPRi1
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
