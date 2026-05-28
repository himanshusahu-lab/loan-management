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
export class get_users {
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
    this.serviceName = 'get_users';
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
      instance = new get_users(
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
    //appendnew_flow_get_users_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_users');
    //appendnew_flow_get_users_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_users');

    this.app['get'](
      `${this.serviceBasePath}/books`,
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
          bh = await this.sd_i1hos4tPEawidmLK(bh, parentSpanInst);
          //appendnew_next_sd_akljFPxZcZwwiDSM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_akljFPxZcZwwiDSM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_users_HttpIn
  }
  //   service flows_get_users

  //appendnew_flow_get_users_start

  async sd_i1hos4tPEawidmLK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i1hos4tPEawidmLK',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qwInstance: SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qw.controller =
        SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qw.controller.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qwInstance.getBooksController(
          spanInst,
          bh.input.query.limit,
          bh.input.query.offset
        )
      );

      bh.local.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I7qzPBRrbiQC8Nby(bh, parentSpanInst);
      //appendnew_next_sd_i1hos4tPEawidmLK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i1hos4tPEawidmLK',
        spanInst,
        'sd_i1hos4tPEawidmLK'
      );
    }
  }

  async sd_I7qzPBRrbiQC8Nby(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I7qzPBRrbiQC8Nby',
      parentSpanInst
    );
    try {
      console.log(bh.local.result);
      if (bh.local.result) {
        bh.local.res = {
          statusCode: 200,
          resMessage: 'A paginated list of books',
          result: bh.local.result[0].local.result,
        };
      } else {
        bh.local.res = {
          statusCode: 500,
          resMessage: 'Something Went Wrong!',
        };
      }

      this.tracerService.sendData(spanInst, bh);
      await this.getBooksOut(bh, parentSpanInst);
      bh = await this.sd_Cc8S4rKO4anXvciF(bh, parentSpanInst);
      //appendnew_next_sd_I7qzPBRrbiQC8Nby
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I7qzPBRrbiQC8Nby',
        spanInst,
        'sd_I7qzPBRrbiQC8Nby'
      );
    }
  }

  async getBooksOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zKVK2iOgRcY5enP5');
    }
  }

  async sd_Cc8S4rKO4anXvciF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cc8S4rKO4anXvciF',
      parentSpanInst
    );
    try {
      bh.local.req = {
        operation: 'READ_BOOK',
        resourceid: 'NA',
        userid: 'C101',
        timestamp: new Date().toISOString(),
      };

      console.log('audit payload', bh.local.req);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8PR3hnC3K9e3jvJB(bh, parentSpanInst);
      //appendnew_next_sd_Cc8S4rKO4anXvciF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cc8S4rKO4anXvciF',
        spanInst,
        'sd_Cc8S4rKO4anXvciF'
      );
    }
  }

  async sd_8PR3hnC3K9e3jvJB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8PR3hnC3K9e3jvJB',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qwInstance: SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qw.controller =
        SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qw.controller.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_CPCR8RZsoxa3L0qwInstance.sendDataForAuditing(
          spanInst,
          bh.local.req.operation,
          bh.local.req.resourceid,
          bh.local.req.userid,
          bh.local.req.timestamp
        )
      );

      bh.res = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8PR3hnC3K9e3jvJB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8PR3hnC3K9e3jvJB',
        spanInst,
        'sd_8PR3hnC3K9e3jvJB'
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
  //appendnew_flow_get_users_Catch
}
