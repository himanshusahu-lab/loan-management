// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class loan_tenure {
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
    this.serviceName = 'loan_tenure';
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
      instance = new loan_tenure(
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
    //appendnew_flow_loan_tenure_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: loan_tenure');
    //appendnew_flow_loan_tenure_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: loan_tenure');

    this.app['get'](
      `${this.serviceBasePath}/loan-tenure`,
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
          bh = await this.sd_Hs3zoVfW3WKXvi5D(bh, parentSpanInst);
          //appendnew_next_sd_JlymKPudx1LSyIIO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JlymKPudx1LSyIIO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_loan_tenure_HttpIn
  }
  //   service flows_loan_tenure

  //appendnew_flow_loan_tenure_start

  async sd_Hs3zoVfW3WKXvi5D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hs3zoVfW3WKXvi5D',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        pageNumber: 0,
        pageSize: 10,
        multiplicity: 'multiple',
        filter: {},
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IsynYnowAwnP4VbC(bh, parentSpanInst);
      //appendnew_next_sd_Hs3zoVfW3WKXvi5D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hs3zoVfW3WKXvi5D',
        spanInst,
        'sd_Hs3zoVfW3WKXvi5D'
      );
    }
  }

  async sd_IsynYnowAwnP4VbC(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/d70051e7-7296-424e-a1c7-21f73b1e1d48/468e159c-b6fb-41b8-b3d0-57843c5df97f',
        timeout: 30000,
        method: 'post',
        headers: {
          token:
            '7cca0b42-7572-40f3-bac6-50800d0e6bed.49cbb32a7d900babcf7ed244aba0ade5d407cefde47bd4bab471d80ea0988546',
        },
        followRedirects: true,
        cookies: {},
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

      bh.local.res = responseMsg;
      await this.sd_MJ178z4IE1EFH0TD(bh, parentSpanInst);
      //appendnew_next_sd_IsynYnowAwnP4VbC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IsynYnowAwnP4VbC');
    }
  }

  async sd_MJ178z4IE1EFH0TD(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MJ178z4IE1EFH0TD');
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
  //appendnew_flow_loan_tenure_Catch
}
