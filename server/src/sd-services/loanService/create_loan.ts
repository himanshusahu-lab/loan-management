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
import * as SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw from '../reelsCOntroller/validationController'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class create_loan {
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
    this.serviceName = 'create_loan';
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
      instance = new create_loan(
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
    //appendnew_flow_create_loan_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: create_loan');
    //appendnew_flow_create_loan_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: create_loan');

    this.app['post'](
      `${this.serviceBasePath}/loan`,
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
          //appendnew_next_sd_1Jz15Kf4cedksAM3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1Jz15Kf4cedksAM3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_create_loan_HttpIn
  }
  //   service flows_create_loan

  //appendnew_flow_create_loan_start

  async validateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateRequest',
      parentSpanInst
    );
    try {
      let data = bh.input.body;
      let errors = [];

      if (!data.status) {
        data.status = 'DRAFT';
      }

      const isDraft = data.status === 'DRAFT';
      const isSubmitted = data.status === 'SUBMITTED';

      if (!isDraft && !isSubmitted) {
        errors.push('Invalid status');
      }

      if (isSubmitted) {
        if (!data.employment_type) errors.push('employment_type is required');

        if (!data.monthly_income) errors.push('monthly_income is required');

        if (!data.loan_type) errors.push('loan_type is required');

        if (!data.loan_amount) errors.push('loan_amount is required');

        if (!data.loan_tenure) errors.push('loan_tenure is required');

        if (!data.credit_score) errors.push('credit_score is required');

        if (!data.purpose_of_loan) errors.push('purpose_of_loan is required');
      }

      if (errors.length > 0) {
        throw {
          statusCode: 400,
          message: errors.join(', '),
        };
      }

      bh.local.loanRequest = data;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.generateApplicationId(bh, parentSpanInst);
      //appendnew_next_validateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CTHHrnJAD3FLUiiB',
        spanInst,
        'validateRequest'
      );
    }
  }

  async generateApplicationId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'generateApplicationId',
      parentSpanInst
    );
    try {
      const timestamp = Date.now();

      bh.local.applicationId = `LN_2026_${timestamp}`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareLoanData(bh, parentSpanInst);
      //appendnew_next_generateApplicationId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zl1x4FHmQUlvKLl1',
        spanInst,
        'generateApplicationId'
      );
    }
  }

  async prepareLoanData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareLoanData',
      parentSpanInst
    );
    try {
      const data = bh.local.loanRequest;

      bh.local.loanInsertData = {
        application_id: bh.local.applicationId,

        applicant_name: data.applicant_name,

        dob: data.dob,

        gender: data.gender,

        mobile: data.mobile,

        email: data.email,

        address: data.address,

        employment_type: data.employment_type,

        employer_name: data.employer_name,

        monthly_income: data.monthly_income,

        loan_type: data.loan_type,

        loan_amount: data.loan_amount,

        loan_tenure: data.loan_tenure,

        credit_score: data.credit_score,

        purpose_of_loan: data.purpose_of_loan,

        status: data.status,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IdKnnQJ1cUVPLPAr(bh, parentSpanInst);
      //appendnew_next_prepareLoanData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3rWhHUYhfj7WZfBh',
        spanInst,
        'prepareLoanData'
      );
    }
  }

  async sd_IdKnnQJ1cUVPLPAr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IdKnnQJ1cUVPLPAr',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.local.insertResult = await dmUtilsInst.insert(
        '_EN_u6exdr1rwe',
        bh.local.loanInsertData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareValidationPayload(bh, parentSpanInst);
      //appendnew_next_sd_IdKnnQJ1cUVPLPAr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IdKnnQJ1cUVPLPAr',
        spanInst,
        'sd_IdKnnQJ1cUVPLPAr'
      );
    }
  }

  async prepareValidationPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareValidationPayload',
      parentSpanInst
    );
    try {
      const loan = bh.local.loanRequest;
      console.log('loan >>>> ', loan, bh.input.body);

      // Calculate age from DOB
      let age = null;

      if (loan.dob) {
        const dob = new Date(loan.dob);

        age = new Date().getFullYear() - dob.getFullYear();
      }
      bh.local.validationPayload = {
        age: age,

        loan_type: bh.local.loanInsertData.loan_type,

        loan_amount: bh.local.loanInsertData.loan_amount,

        loan_tenure: bh.local.loanInsertData.loan_tenure,

        credit_score: bh.local.loanInsertData.credit_score,

        monthly_income: bh.local.loanInsertData.monthly_income,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W7SvquPoKQymGhmR(bh, parentSpanInst);
      //appendnew_next_prepareValidationPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uPDlXoyTns0rbtwj',
        spanInst,
        'prepareValidationPayload'
      );
    }
  }

  async sd_W7SvquPoKQymGhmR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W7SvquPoKQymGhmR',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVwInstance: SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw.validationController =
        SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw.validationController.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVwInstance.validationController(
          spanInst,
          bh.local.validationPayload
        );
      bh.local.reelsResponse = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateReelsResponse(bh, parentSpanInst);
      //appendnew_next_sd_W7SvquPoKQymGhmR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W7SvquPoKQymGhmR',
        spanInst,
        'sd_W7SvquPoKQymGhmR'
      );
    }
  }

  async validateReelsResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateReelsResponse',
      parentSpanInst
    );
    try {
      let result = bh.local.reelsResponse.payload.result;
      console.log('Reels data return => ', result);

      if (!result) {
        bh.input.error = {
          statusCode: 500,

          message: 'Validation Controller returned empty response',
        };

        throw new Error('Validation Controller returned empty response');
      }

      bh.local.loanMetrics = result;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.assignReviewTask(bh, parentSpanInst);
      //appendnew_next_validateReelsResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6W2u4jo9MzkvsQdh',
        spanInst,
        'validateReelsResponse'
      );
    }
  }

  async assignReviewTask(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'assignReviewTask',
      parentSpanInst
    );
    try {
      let assignedRole = null;
      let reviewStage = null;

      if (bh.local.loanRequest.status === 'SUBMITTED') {
        bh.local.submittedAt = new Date().toISOString();

        assignedRole = 'LOAN_OFFICER';

        reviewStage = 'LOAN_OFFICER_REVIEW';
      }

      bh.local.assignedRole = assignedRole;

      bh.local.reviewStage = reviewStage;

      console.log({
        assignedRole,
        reviewStage,
        submittedAt: bh.local.submittedAt,
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkApplicationStatus(bh, parentSpanInst);
      //appendnew_next_assignReviewTask
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5PXyyzw2y3eH0KBv',
        spanInst,
        'assignReviewTask'
      );
    }
  }

  async checkApplicationStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkApplicationStatus',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.loanRequest.status,
          'SUBMITTED',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareFinalLoanUpdate(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.loanRequest.status,
          'DRAFT',
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareDraftResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IKWSrUHogu2mD4EH',
        spanInst,
        'checkApplicationStatus'
      );
    }
  }

  async prepareFinalLoanUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareFinalLoanUpdate',
      parentSpanInst
    );
    try {
      bh.local.finalUpdateData = {
        interest_rate: bh.local.loanMetrics.interest_rate,

        emi: bh.local.loanMetrics.emi,

        debt_to_income_ratio: bh.local.loanMetrics.dti_ratio,

        risk_category: bh.local.loanMetrics.dti_status,

        review_stage: bh.local.reviewStage,

        status:
          bh.local.loanRequest.status === 'DRAFT' ? 'DRAFT' : 'UNDER_REVIEW',

        remarks: null,

        submitted_at: bh.local.submittedAt || null,

        loan_officer_remarks: null,
        loan_officer_decision: null,
        loan_officer_reviewed_at: null,

        credit_manager_remarks: null,
        credit_manager_decision: null,
        credit_manager_reviewed_at: null,

        approved_at: null,
        rejected_at: null,
        rejection_reason: null,

        id: bh.local.insertResult.id,

        application_id: bh.local.insertResult.application_id,

        applicant_name: bh.local.insertResult.applicant_name,

        dob: bh.local.insertResult.dob,

        gender: bh.local.insertResult.gender,

        mobile: bh.local.insertResult.mobile,

        email: bh.local.insertResult.email,

        address: bh.local.insertResult.address,

        employment_type: bh.local.insertResult.employment_type,

        employer_name: bh.local.insertResult.employer_name,

        monthly_income: bh.local.insertResult.monthly_income,

        loan_type: bh.local.insertResult.loan_type,

        loan_amount: bh.local.insertResult.loan_amount,

        loan_tenure: bh.local.insertResult.loan_tenure,

        credit_score: bh.local.insertResult.credit_score,

        purpose_of_loan: bh.local.insertResult.purpose_of_loan,
      };
      console.log(
        'Final Update Data:',
        bh.local.insertResult,
        bh.local.finalUpdateData
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J5RAyiYYJRdZ5BXd(bh, parentSpanInst);
      //appendnew_next_prepareFinalLoanUpdate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1WIu6075emEDwLdb',
        spanInst,
        'prepareFinalLoanUpdate'
      );
    }
  }

  async sd_J5RAyiYYJRdZ5BXd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J5RAyiYYJRdZ5BXd',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_Pela28njo43vGVh7');
      bh.local.updateFinalResult = await dmUtilsInst.updateByFilter(
        '_EN_u6exdr1rwe',
        bh.local.insertResult.id,
        bh.local.finalUpdateData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareResponse(bh, parentSpanInst);
      //appendnew_next_sd_J5RAyiYYJRdZ5BXd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J5RAyiYYJRdZ5BXd',
        spanInst,
        'sd_J5RAyiYYJRdZ5BXd'
      );
    }
  }

  async prepareResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareResponse',
      parentSpanInst
    );
    try {
      console.log(
        'bh.local.updateFinalResult >> ',
        bh.local.updateFinalResult,
        bh.local.insertResult
      );

      bh.output = {
        success: true,

        message: 'Loan application created successfully',

        data: bh.local.finalUpdateData || bh.local.updateFinalResult,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.response(bh, parentSpanInst);
      //appendnew_next_prepareResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SZczF69D3K9oEgpR',
        spanInst,
        'prepareResponse'
      );
    }
  }

  async response(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ppQpX9IMC1AhPJEK');
    }
  }

  async prepareDraftResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareDraftResponse',
      parentSpanInst
    );
    try {
      bh.local.response = {
        success: true,

        applicationId: bh.local.applicationId,

        status: 'DRAFT',

        message: 'Application saved as draft',

        timestamp: new Date().toISOString(),
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jqwvpMRoPmtLYANR(bh, parentSpanInst);
      //appendnew_next_prepareDraftResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TQFRAay3AUCobvxl',
        spanInst,
        'prepareDraftResponse'
      );
    }
  }

  async sd_jqwvpMRoPmtLYANR(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jqwvpMRoPmtLYANR');
    }
  }

  async sd_TPRSQFvfmWlEEpLf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TPRSQFvfmWlEEpLf',
      parentSpanInst
    );
    try {
      bh.output = {
        success: false,

        statusCode: bh.input.error?.statusCode || 500,

        message: bh.input.error?.message || 'Something went wrong',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NciYDSFP0ubPvH6G(bh, parentSpanInst);
      //appendnew_next_sd_TPRSQFvfmWlEEpLf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TPRSQFvfmWlEEpLf',
        spanInst,
        'sd_TPRSQFvfmWlEEpLf'
      );
    }
  }

  async sd_NciYDSFP0ubPvH6G(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NciYDSFP0ubPvH6G');
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
    const catchConnectedNodes = ['sd_TPRSQFvfmWlEEpLf', 'sd_NciYDSFP0ubPvH6G'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_TPRSQFvfmWlEEpLf(bh, parentSpanInst);
    //appendnew_next_tryCatch
    return true;
  }
  //appendnew_flow_create_loan_Catch
}
