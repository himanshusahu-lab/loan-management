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
export class review_credit_manager {
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
    this.serviceName = 'review_credit_manager';
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
      instance = new review_credit_manager(
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
    //appendnew_flow_review_credit_manager_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: review_credit_manager');
    //appendnew_flow_review_credit_manager_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: review_credit_manager');

    this.app['post'](
      `${this.serviceBasePath}/loan/credit-manager-review/:id`,
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
          //appendnew_next_sd_HkKi8G4hxKmCZeC6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HkKi8G4hxKmCZeC6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_review_credit_manager_HttpIn
  }
  //   service flows_review_credit_manager

  //appendnew_flow_review_credit_manager_start

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
      bh = await this.findLoan(bh, parentSpanInst);
      //appendnew_next_validateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5r3TcKbxc4dGNeF7',
        spanInst,
        'validateRequest'
      );
    }
  }

  async findLoan(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('findLoan', parentSpanInst);
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
      //appendnew_next_findLoan
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NTm1Il8rsh9pR3c1',
        spanInst,
        'findLoan'
      );
    }
  }

  async validateLoanStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateLoanStatus',
      parentSpanInst
    );
    try {
      let loan = bh.local.loanData;

      console.log('loan >>>>', loan);
      if (Array.isArray(loan)) {
        loan = loan[0];
      }

      if (!loan) {
        throw {
          statusCode: 404,
          message: 'Loan not found',
        };
      }

      if (
        loan.status !== 'UNDER_REVIEW' ||
        loan.review_stage !== 'CREDIT_MANAGER_REVIEW'
      ) {
        throw {
          statusCode: 400,
          message: 'Loan is not pending Credit Manager review',
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
        'sd_9VoTpDt2RnCAmWVp',
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
        bh = await this.prepareApproveData(bh, parentSpanInst);
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
        'sd_QNXuC9fu3IKWsCRL',
        spanInst,
        'reviewDecision'
      );
    }
  }

  async prepareApproveData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareApproveData',
      parentSpanInst
    );
    try {
      let loan = bh.local.loanData;
      bh.local.updateData = {
        status: 'APPROVED',

        review_stage: 'COMPLETED',

        credit_manager_decision: 'APPROVED',

        credit_manager_remarks: bh.local.body.remarks,

        credit_manager_reviewed_at: new Date().toISOString(),

        approved_at: new Date().toISOString(),

        interest_rate: bh.local.body.interest_rate ?? loan.interest_rate,

        final_interest_rate: bh.local.body.interest_rate || loan.interest_rate,

        updated_at: new Date().toISOString(),
      };

      console.log('APPROVE DATA', bh.local.updateData);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lTXjdFHU0QsYUfxl(bh, parentSpanInst);
      //appendnew_next_prepareApproveData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o9EYfB46QCOLQMBe',
        spanInst,
        'prepareApproveData'
      );
    }
  }

  async sd_lTXjdFHU0QsYUfxl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lTXjdFHU0QsYUfxl',
      parentSpanInst
    );
    try {
      console.log('loanId >>>', bh.local.loanId);

      console.log('updateData >>>', bh.local.updateData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sHu6YvRfhaVYeby6(bh, parentSpanInst);
      //appendnew_next_sd_lTXjdFHU0QsYUfxl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lTXjdFHU0QsYUfxl',
        spanInst,
        'sd_lTXjdFHU0QsYUfxl'
      );
    }
  }

  async sd_sHu6YvRfhaVYeby6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sHu6YvRfhaVYeby6',
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
      //appendnew_next_sd_sHu6YvRfhaVYeby6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sHu6YvRfhaVYeby6',
        spanInst,
        'sd_sHu6YvRfhaVYeby6'
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

        message: 'Credit Manager review completed successfully',

        status: bh.local.updateData.status,

        review_stage: bh.local.updateData.review_stage,

        application_id: bh.local.loanData.application_id,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xqKgRrMBsNJkDzoO(bh, parentSpanInst);
      //appendnew_next_formatResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eA9pFpb0ozKrW7Uf',
        spanInst,
        'formatResponse'
      );
    }
  }

  async sd_xqKgRrMBsNJkDzoO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xqKgRrMBsNJkDzoO');
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

        review_stage: 'COMPLETED',

        credit_manager_decision: 'REJECTED',

        credit_manager_remarks: bh.local.body.remarks,

        credit_manager_reviewed_at: new Date().toISOString(),

        rejection_reason: bh.local.body.remarks,

        rejected_at: new Date().toISOString(),

        updated_at: new Date().toISOString(),
      };

      console.log('REJECT DATA', bh.local.updateData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lTXjdFHU0QsYUfxl(bh, parentSpanInst);
      //appendnew_next_prepareRejectData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7kSL2XyGpOtILjky',
        spanInst,
        'prepareRejectData'
      );
    }
  }

  async sd_Jbhg1l6NCkCx2dsp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jbhg1l6NCkCx2dsp',
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
      await this.sd_TNItsGKmfd8GJOZm(bh, parentSpanInst);
      //appendnew_next_sd_Jbhg1l6NCkCx2dsp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jbhg1l6NCkCx2dsp',
        spanInst,
        'sd_Jbhg1l6NCkCx2dsp'
      );
    }
  }

  async sd_TNItsGKmfd8GJOZm(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.output.statusCode).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TNItsGKmfd8GJOZm');
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
    const catchConnectedNodes = ['sd_Jbhg1l6NCkCx2dsp', 'sd_TNItsGKmfd8GJOZm'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_Jbhg1l6NCkCx2dsp(bh, parentSpanInst);
    //appendnew_next_tryCatch
    return true;
  }
  //appendnew_flow_review_credit_manager_Catch
}
