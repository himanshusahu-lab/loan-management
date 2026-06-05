// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class validationController {
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
    this.serviceName = 'validationController';
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
      instance = new validationController(
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
    //appendnew_flow_validationController_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: validationController');
    //appendnew_flow_validationController_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: validationController');
    //appendnew_flow_validationController_HttpIn
  }
  //   service flows_validationController

  async validationController(parentSpanInst, body: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'validationController',
      parentSpanInst
    );
    let bh: any = {
      input: {
        body,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VK2xDlSlyWOw0wJ0(bh, parentSpanInst);
      //appendnew_next_validationController
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RWotEaBVUSsEmIeU',
        spanInst,
        'validationController'
      );
    }
  }
  //appendnew_flow_validationController_start

  async sd_VK2xDlSlyWOw0wJ0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VK2xDlSlyWOw0wJ0',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      console.log('Runtime Request:', body, bh.local.result);

      bh.local.payload = {
        workflowId: 'ff50a9f1-b76b-4ddd-92e4-4d5c5e0da20f',

        version: '1.0.13',

        inputObj: {
          age: body.age,

          loan_amount: body.loan_amount,

          loan_tenure: body.loan_tenure,

          credit_score: body.credit_score,

          interest_rate: body.interest_rate,
          loan_type: body.loan_type,

          monthly_income: body.monthly_income,
        },
      };

      console.log('Prepared Payload:', bh.local.payload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4CLWmJh8MFXHwTH1(bh, parentSpanInst);
      //appendnew_next_sd_VK2xDlSlyWOw0wJ0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VK2xDlSlyWOw0wJ0',
        spanInst,
        'sd_VK2xDlSlyWOw0wJ0'
      );
    }
  }

  async sd_4CLWmJh8MFXHwTH1(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync',
        timeout: 30000,
        method: 'post',
        headers: {
          accept: 'application/json',
          token:
            '8ea87043-d82d-44d2-895c-166b6c2042a8.8e615412e4028585ee71d1dd19d0f06d2d74d079a1875c4dd87a5062155dda2d',
          'Content-Type': 'application/json',
        },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      this.sd_d38ojZiLNZjek4Ej(bh, parentSpanInst);
      //appendnew_next_sd_4CLWmJh8MFXHwTH1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4CLWmJh8MFXHwTH1');
    }
  }

  async sd_d38ojZiLNZjek4Ej(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d38ojZiLNZjek4Ej',
      parentSpanInst
    );
    try {
      let logobj: any = bh.local.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_d38ojZiLNZjek4Ej
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d38ojZiLNZjek4Ej',
        spanInst,
        'sd_d38ojZiLNZjek4Ej'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_validationController_Catch
}
