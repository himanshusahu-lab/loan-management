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
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class loanExistController {
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
    this.serviceName = 'loanExistController';
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
      instance = new loanExistController(
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
    //appendnew_flow_loanExistController_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: loanExistController');
    //appendnew_flow_loanExistController_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: loanExistController');
    //appendnew_flow_loanExistController_HttpIn
  }
  //   service flows_loanExistController

  async loanExsitsController(parentSpanInst, id = 0, ...others) {
    const spanInst = this.tracerService.createSpan(
      'loanExsitsController',
      parentSpanInst
    );
    let bh: any = {
      input: {
        id,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BEuX2d4xkNslH7Aw(bh, parentSpanInst);
      //appendnew_next_loanExsitsController
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
        'sd_mCAvqJJYUECJ26Nj',
        spanInst,
        'loanExsitsController'
      );
    }
  }
  //appendnew_flow_loanExistController_start

  async sd_BEuX2d4xkNslH7Aw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BEuX2d4xkNslH7Aw',
      parentSpanInst
    );
    try {
      bh.local.filter = { id: bh.input.id };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkLoanExists(bh, parentSpanInst);
      //appendnew_next_sd_BEuX2d4xkNslH7Aw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BEuX2d4xkNslH7Aw',
        spanInst,
        'sd_BEuX2d4xkNslH7Aw'
      );
    }
  }

  async checkLoanExists(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkLoanExists',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.local.bookData = await dmUtilsInst.find(
        '_EN_u6exdr1rwe',
        bh.local.filter.id,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3BJU48Uqq78KQfbV(bh, parentSpanInst);
      //appendnew_next_checkLoanExists
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uhHDhGzmGrWP3PPz',
        spanInst,
        'checkLoanExists'
      );
    }
  }

  async sd_3BJU48Uqq78KQfbV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3BJU48Uqq78KQfbV',
      parentSpanInst
    );
    try {
      if (bh.local.bookData && bh.local.bookData.length > 0) {
        bh.local.result = { exists: true };
        bh.local.statusCode = 200;
      } else {
        bh.local.result = { exists: false };
        bh.local.statusCode = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      this.sd_RtfcrdrN3U4znqLh(bh, parentSpanInst);
      //appendnew_next_sd_3BJU48Uqq78KQfbV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3BJU48Uqq78KQfbV',
        spanInst,
        'sd_3BJU48Uqq78KQfbV'
      );
    }
  }

  async sd_RtfcrdrN3U4znqLh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RtfcrdrN3U4znqLh',
      parentSpanInst
    );
    try {
      let logobj: any = bh.local.result1;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_RtfcrdrN3U4znqLh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RtfcrdrN3U4znqLh',
        spanInst,
        'sd_RtfcrdrN3U4znqLh'
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
  //appendnew_flow_loanExistController_Catch
}
