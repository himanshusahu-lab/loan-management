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
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class getloandetails {
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
    this.serviceName = 'getloandetails';
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
      instance = new getloandetails(
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
    //appendnew_flow_getloandetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getloandetails');
    //appendnew_flow_getloandetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getloandetails');

    this.app['get'](
      `${this.serviceBasePath}/loan/:applicationId`,
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
          bh = await this.validateApplicationId(bh, parentSpanInst);
          //appendnew_next_sd_sdiV3Z3YyvG39mQy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sdiV3Z3YyvG39mQy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getloandetails_HttpIn
  }
  //   service flows_getloandetails

  //appendnew_flow_getloandetails_start

  async validateApplicationId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateApplicationId',
      parentSpanInst
    );
    try {
      let applicationId = bh.input.params.applicationId;

      if (!applicationId) {
        bh.input.error = {
          statusCode: 400,

          message: 'Application ID is required',
        };

        throw new Error('Application ID is required');
      }

      bh.local.applicationId = applicationId;

      bh.local.filter = {
        application_id: applicationId,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O3AMe6j15RfasKYX(bh, parentSpanInst);
      //appendnew_next_validateApplicationId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lGEDpOnOeqs208R6',
        spanInst,
        'validateApplicationId'
      );
    }
  }

  async sd_O3AMe6j15RfasKYX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O3AMe6j15RfasKYX',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.local.loanResult = await dmUtilsInst.find(
        '_EN_u6exdr1rwe',
        bh.local.filter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y4VfgTz2RJerKhXd(bh, parentSpanInst);
      //appendnew_next_sd_O3AMe6j15RfasKYX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O3AMe6j15RfasKYX',
        spanInst,
        'sd_O3AMe6j15RfasKYX'
      );
    }
  }

  async sd_y4VfgTz2RJerKhXd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y4VfgTz2RJerKhXd',
      parentSpanInst
    );
    try {
      bh.local.loanResult = bh.local.loanResult?.[0] || 'null';

      console.log('bh.local.loanResult >>> ', bh.local.loanResult);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r5I7kjz5QdYfzdFV(bh, parentSpanInst);
      //appendnew_next_sd_y4VfgTz2RJerKhXd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y4VfgTz2RJerKhXd',
        spanInst,
        'sd_y4VfgTz2RJerKhXd'
      );
    }
  }

  async sd_r5I7kjz5QdYfzdFV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r5I7kjz5QdYfzdFV',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['neq'](
          bh.local.loanResult.id,
          null,
          undefined,
          undefined
        )
      ) {
        bh = await this.detailResponse(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.loanResult.id,
          null,
          undefined,
          undefined
        )
      ) {
        bh = await this.detailNotFound(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r5I7kjz5QdYfzdFV',
        spanInst,
        'sd_r5I7kjz5QdYfzdFV'
      );
    }
  }

  async detailResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'detailResponse',
      parentSpanInst
    );
    try {
      bh.output = {
        success: true,

        data: bh.local.loanResult,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7Ymf4qX1Cxju4xWK(bh, parentSpanInst);
      //appendnew_next_detailResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V6YwFeKUWV5cIpuD',
        spanInst,
        'detailResponse'
      );
    }
  }

  async sd_7Ymf4qX1Cxju4xWK(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7Ymf4qX1Cxju4xWK');
    }
  }

  async detailNotFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'detailNotFound',
      parentSpanInst
    );
    try {
      bh.output = {
        success: false,

        statusCode: 404,

        message: 'Loan application not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_avCrAbxiFKXsRy7W(bh, parentSpanInst);
      //appendnew_next_detailNotFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y57QN9Opr6HgQ5rQ',
        spanInst,
        'detailNotFound'
      );
    }
  }

  async sd_avCrAbxiFKXsRy7W(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_avCrAbxiFKXsRy7W');
    }
  }

  async sd_wYoIZbWUGbDfaGEP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wYoIZbWUGbDfaGEP',
      parentSpanInst
    );
    try {
      bh.output = {
        success: false,

        statusCode: bh.input.error?.statusCode || 500,

        message: bh.input.error?.message || 'Something went wrong',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_w5Xg9CruGeOHNf9v(bh, parentSpanInst);
      //appendnew_next_sd_wYoIZbWUGbDfaGEP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wYoIZbWUGbDfaGEP',
        spanInst,
        'sd_wYoIZbWUGbDfaGEP'
      );
    }
  }

  async sd_w5Xg9CruGeOHNf9v(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w5Xg9CruGeOHNf9v');
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
      (await this.tryCatch(bh, parentSpanInst))
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
  async tryCatch(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_wYoIZbWUGbDfaGEP', 'sd_w5Xg9CruGeOHNf9v'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_wYoIZbWUGbDfaGEP(bh, parentSpanInst);
    //appendnew_next_tryCatch
    return true;
  }
  //appendnew_flow_getloandetails_Catch
}
