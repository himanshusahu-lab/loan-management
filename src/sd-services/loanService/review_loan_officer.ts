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
export class review_loan_officer {
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
    this.serviceName = 'review_loan_officer';
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
      instance = new review_loan_officer(
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
    //appendnew_flow_review_loan_officer_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: review_loan_officer');
    //appendnew_flow_review_loan_officer_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: review_loan_officer');

    this.app['post'](
      `${this.serviceBasePath}/loan/officer-review/:id`,
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
          bh = await this.validateRequest(bh, parentSpanInst);
          //appendnew_next_sd_623jg8L4zvp6f3r7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_623jg8L4zvp6f3r7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_review_loan_officer_HttpIn
  }
  //   service flows_review_loan_officer

  //appendnew_flow_review_loan_officer_start

  async validateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateRequest',
      parentSpanInst
    );
    try {
      let loanId = bh.input.params.id;

      let body = bh.input.body;

      if (!loanId) {
        throw {
          statusCode: 400,
          message: 'Loan ID required',
        };
      }

      if (!body.action) {
        throw {
          statusCode: 400,
          message: 'Action required',
        };
      }

      bh.local.loanId = Number(loanId);

      bh.local.body = body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BQ1cbgLQCxvL6Ztq(bh, parentSpanInst);
      //appendnew_next_validateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K0hXXQQGiBAxC52c',
        spanInst,
        'validateRequest'
      );
    }
  }

  async sd_BQ1cbgLQCxvL6Ztq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BQ1cbgLQCxvL6Ztq',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.local.loanData = await dmUtilsInst.find(
        '_EN_u6exdr1rwe',
        { id: bh.local.loanId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateLoanStatus(bh, parentSpanInst);
      //appendnew_next_sd_BQ1cbgLQCxvL6Ztq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BQ1cbgLQCxvL6Ztq',
        spanInst,
        'sd_BQ1cbgLQCxvL6Ztq'
      );
    }
  }

  async validateLoanStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateLoanStatus',
      parentSpanInst
    );
    try {
      let loan = bh.local.loanData[0];

      if (!loan) {
        throw {
          statusCode: 404,
          message: 'Loan not found',
        };
      }
      console.log('loan >>>> ', loan);

      if (loan.status !== 'SUBMITTED') {
        throw {
          statusCode: 400,
          message: 'Loan is not in submitted state',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.reviewDecision(bh, parentSpanInst);
      //appendnew_next_validateLoanStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T5C6GYMj35d9wZow',
        spanInst,
        'validateLoanStatus'
      );
    }
  }

  async reviewDecision(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'reviewDecision',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.body.action,
          'FORWARD',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareForwardData(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.body.action,
          'REJECT',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareRejectData(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d6Mq7tguKlCbDhXe',
        spanInst,
        'reviewDecision'
      );
    }
  }

  async prepareForwardData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareForwardData',
      parentSpanInst
    );
    try {
      bh.local.updateData = {
        status: 'CREDIT_MANAGER_REVIEW',

        remarks: bh.local.body.remarks || 'Verified by Loan Officer',

        updated_at: new Date(),
      };

      console.log('UPDATE DATA >>>>', bh.local.updateData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Uk9RsT7sVXJJoZd8(bh, parentSpanInst);
      //appendnew_next_prepareForwardData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DBeLXXmhzmYs8e4v',
        spanInst,
        'prepareForwardData'
      );
    }
  }

  async sd_Uk9RsT7sVXJJoZd8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uk9RsT7sVXJJoZd8',
      parentSpanInst
    );
    try {
      console.log('loanId >>>', bh.local.loanId);

      console.log('updateData >>>', bh.local.updateData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HctUSdY3ivr0dLbS(bh, parentSpanInst);
      //appendnew_next_sd_Uk9RsT7sVXJJoZd8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uk9RsT7sVXJJoZd8',
        spanInst,
        'sd_Uk9RsT7sVXJJoZd8'
      );
    }
  }

  async sd_HctUSdY3ivr0dLbS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HctUSdY3ivr0dLbS',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.updateResult = await dmUtilsInst.updateByFilter(
        '_EN_u6exdr1rwe',
        { id: bh.local.loanId },
        bh.local.updateData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.formatResponse(bh, parentSpanInst);
      //appendnew_next_sd_HctUSdY3ivr0dLbS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HctUSdY3ivr0dLbS',
        spanInst,
        'sd_HctUSdY3ivr0dLbS'
      );
    }
  }

  async formatResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'formatResponse',
      parentSpanInst
    );
    try {
      bh.output = {
        success: true,

        message: 'Loan review completed successfully',

        status: bh.local.updateData.status,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_x5PQMHzw8SnrWDY3(bh, parentSpanInst);
      //appendnew_next_formatResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r4dP1SJdaPJ7dxle',
        spanInst,
        'formatResponse'
      );
    }
  }

  async sd_x5PQMHzw8SnrWDY3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x5PQMHzw8SnrWDY3');
    }
  }

  async prepareRejectData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareRejectData',
      parentSpanInst
    );
    try {
      bh.local.updateData = {
        status: 'REJECTED',

        rejection_reason: bh.local.body.remarks || 'Rejected by Loan Officer',

        remarks: bh.local.body.remarks || 'Rejected by Loan Officer',

        rejected_at: new Date(),

        updated_at: new Date(),
      };

      console.log('bh.local.updateData >> ', bh.local.updateData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Uk9RsT7sVXJJoZd8(bh, parentSpanInst);
      //appendnew_next_prepareRejectData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dh3hyvpwm6MhHSun',
        spanInst,
        'prepareRejectData'
      );
    }
  }

  async sd_ZacwT0T8ZbQ8s8Kt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZacwT0T8ZbQ8s8Kt',
      parentSpanInst
    );
    try {
      let error = bh.error || {};

      bh.output = {
        success: false,

        statusCode: error.statusCode || 500,

        message: error.message || 'Something went wrong',
      };

      console.log('bh.output >>>> ', bh.output);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_J8tcRX6cHu1Ljrgl(bh, parentSpanInst);
      //appendnew_next_sd_ZacwT0T8ZbQ8s8Kt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZacwT0T8ZbQ8s8Kt',
        spanInst,
        'sd_ZacwT0T8ZbQ8s8Kt'
      );
    }
  }

  async sd_J8tcRX6cHu1Ljrgl(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.output.statusCode).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J8tcRX6cHu1Ljrgl');
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
    const catchConnectedNodes = ['sd_ZacwT0T8ZbQ8s8Kt', 'sd_J8tcRX6cHu1Ljrgl'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_ZacwT0T8ZbQ8s8Kt(bh, parentSpanInst);
    //appendnew_next_tryCatch
    return true;
  }
  //appendnew_flow_review_loan_officer_Catch
}
