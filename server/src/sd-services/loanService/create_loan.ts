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

      // Default status
      if (!data.status) {
        data.status = 'DRAFT';
      }

      let isDraft = data.status === 'DRAFT';

      let isSubmitted = data.status === 'SUBMITTED';

      // --------------------
      // DRAFT VALIDATIONS
      // --------------------

      if (isDraft) {
        if (!data.applicant_name) {
          errors.push('Applicant name required');
        }

        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.push('Invalid email format');
        }

        if (data.mobile && !/^\d{10}$/.test(data.mobile)) {
          errors.push('Mobile must be 10 digits');
        }
      }

      // --------------------
      // SUBMITTED VALIDATIONS
      // --------------------

      if (isSubmitted) {
        let requiredFields = [
          'applicant_name',

          'dob',

          'gender',

          'mobile',

          'email',

          'address',

          'employment_type',

          'monthly_income',

          'loan_type',

          'loan_amount',

          'loan_tenure',

          'credit_score',

          'purpose_of_loan',
        ];

        requiredFields.forEach((field) => {
          if (!data[field]) {
            errors.push(`${field} is required`);
          }
        });

        // Email validation
        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.push('Invalid email format');
        }

        // Mobile validation
        if (data.mobile && !/^\d{10}$/.test(data.mobile)) {
          errors.push('Mobile must be 10 digits');
        }

        // Age validation
        if (data.dob) {
          let dob = new Date(data.dob);

          let age = new Date().getFullYear() - dob.getFullYear();

          if (age < 21 || age > 60) {
            errors.push('Age must be between 21 and 60');
          }
        }

        // Loan amount
        if (data.loan_amount < 50000 || data.loan_amount > 5000000) {
          errors.push('Loan amount must be between 50,000 and 50,00,000');
        }

        // Credit score
        if (data.credit_score < 300 || data.credit_score > 900) {
          errors.push('Credit score must be between 300 and 900');
        }

        // Income
        if (data.monthly_income <= 0) {
          errors.push('Monthly income must be positive');
        }
      }

      if (errors.length > 0) {
        bh.input.error = {
          statusCode: 400,

          message: errors.join(', '),
        };

        throw new Error(errors.join(', '));
      }

      bh.local.loanData = data;
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
      let random = Math.floor(Math.random() * 10000);

      bh.local.applicationId = 'LN2026' + random;

      console.log('Generated Application ID:', bh.local.applicationId);
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
      let body = bh.local.loanData;

      bh.local.loanData = {
        application_id: bh.local.applicationId,

        user_id: body.user_id ?? null,

        applicant_name: body.applicant_name || null,

        dob: body.dob || null,

        gender: body.gender || null,

        mobile: body.mobile || null,

        email: body.email || null,

        address: body.address || null,

        employment_type: body.employment_type || null,

        employer_name: body.employer_name || null,

        monthly_income: body.monthly_income || null,

        loan_type: body.loan_type || null,

        loan_amount: body.loan_amount || null,

        loan_tenure: body.loan_tenure || null,

        credit_score: body.credit_score || null,

        purpose_of_loan: body.purpose_of_loan || null,

        status: body.status || 'DRAFT',

        submitted_at: body.status === 'SUBMITTED' ? new Date() : null,
      };

      console.log('Loan Data:', bh.local.loanData);

      console.log(JSON.stringify(bh.local.loanData, null, 2));
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
        bh.local.loanData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkApplicationStatus(bh, parentSpanInst);
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

  async checkApplicationStatus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkApplicationStatus',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.loanData.status,
          'SUBMITTED',
          undefined,
          undefined
        )
      ) {
        bh = await this.calculateLoanMetrics(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.loanData.status,
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

  async calculateLoanMetrics(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'calculateLoanMetrics',
      parentSpanInst
    );
    try {
      let loanAmount = bh.local.loanData.loan_amount;

      let tenureMonths = bh.local.loanData.loan_tenure;

      let annualInterestRate = 8.5;

      let monthlyIncome = bh.local.loanData.monthly_income;

      let creditScore = bh.local.loanData.credit_score;

      // Monthly Interest Rate
      let monthlyRate = annualInterestRate / 12 / 100;

      // EMI Formula
      let emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);

      // Debt To Income Ratio
      let dti = emi / monthlyIncome;

      // Risk Logic
      let riskCategory = 'HIGH';

      if (creditScore >= 750 && dti < 0.4) {
        riskCategory = 'LOW';
      } else if (creditScore >= 650 && dti < 0.6) {
        riskCategory = 'MEDIUM';
      }

      // Store Data
      bh.local.calculatedMetrics = {
        interest_rate: annualInterestRate,

        emi: Number(emi.toFixed(2)),

        debt_to_income_ratio: Number(dti.toFixed(2)),

        risk_category: riskCategory,
      };

      console.log('Calculated Metrics:', bh.local.calculatedMetrics);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.loanDecisionEngine(bh, parentSpanInst);
      //appendnew_next_calculateLoanMetrics
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MGSvMtbMJHGDggPH',
        spanInst,
        'calculateLoanMetrics'
      );
    }
  }

  async loanDecisionEngine(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'loanDecisionEngine',
      parentSpanInst
    );
    try {
      let risk = bh.local.calculatedMetrics.risk_category;

      let decision = '';
      let status = '';

      if (risk === 'LOW') {
        decision = 'AUTO_APPROVE';

        status = 'APPROVED';
      } else if (risk === 'MEDIUM') {
        decision = 'LOAN_OFFICER_REVIEW';

        status = 'UNDER_REVIEW';
      } else {
        decision = 'CREDIT_MANAGER_REVIEW';

        status = 'UNDER_REVIEW';
      }

      bh.local.loanDecision = decision;

      bh.local.loanStatus = status;

      console.log('Decision:', decision);

      console.log('Status:', status);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.assignReviewTask(bh, parentSpanInst);
      //appendnew_next_loanDecisionEngine
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hSEREAd624NTmDgY',
        spanInst,
        'loanDecisionEngine'
      );
    }
  }

  async assignReviewTask(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'assignReviewTask',
      parentSpanInst
    );
    try {
      let assignedRole = '';

      if (bh.local.loanDecision === 'AUTO_APPROVE') {
        assignedRole = 'CREDIT_MANAGER';
      } else if (bh.local.loanDecision === 'LOAN_OFFICER_REVIEW') {
        assignedRole = 'LOAN_OFFICER';
      } else {
        assignedRole = 'CREDIT_MANAGER';
      }

      bh.local.assignedRole = assignedRole;

      console.log('Assigned Role:', assignedRole);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareFinalLoanUpdate(bh, parentSpanInst);
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

  async prepareFinalLoanUpdate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareFinalLoanUpdate',
      parentSpanInst
    );
    try {
      bh.local.finalUpdateData = {
        interest_rate: bh.local.calculatedMetrics.interest_rate,

        emi: bh.local.calculatedMetrics.emi,

        debt_to_income_ratio: bh.local.calculatedMetrics.debt_to_income_ratio,

        risk_category: bh.local.calculatedMetrics.risk_category,

        remarks: bh.local.loanDecision,

        status: bh.local.loanStatus,
        id: bh.local.insertResult?.id,
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
        // status:bh.local.insertResult.status,
        application_id: bh.local.insertResult.application_id,
        applicant_name: bh.local.insertResult.applicant_name,
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
        bh.local.finalUpdateData.id,
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
      bh.output = {
        success: true,

        message: 'Loan application created successfully',

        data: bh.local.updateFinalResult || bh.local.insertResult,
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
      bh.output = {
        success: true,

        message: 'Loan application saved as draft successfully',

        data: {
          application_id: bh.local.loanData.application_id,

          applicant_name: bh.local.loanData.applicant_name,

          status: 'DRAFT',
        },
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
      bh.web.res.status(200).send(bh.output);

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
