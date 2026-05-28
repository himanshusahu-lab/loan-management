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
import * as SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD from '../loanController/mediaController'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class upload_doc {
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
    this.serviceName = 'upload_doc';
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
      instance = new upload_doc(
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
    //appendnew_flow_upload_doc_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: upload_doc');
    //appendnew_flow_upload_doc_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: upload_doc');

    this.app['post'](
      `${this.serviceBasePath}/media/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'memory',
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          //appendnew_next_sd_O1e85K9tzQhPl987
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_O1e85K9tzQhPl987');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_upload_doc_HttpIn
  }
  //   service flows_upload_doc

  //appendnew_flow_upload_doc_start

  async validateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateRequest',
      parentSpanInst
    );

    try {
      const uploadedFile = bh.input?.files?.file?.[0];

      console.log('REQ FILES >>> ', uploadedFile, bh.input.req?.files, bh.input);

      if (!uploadedFile) {
        bh.input.error = {
          statusCode: 400,
          message: 'File is required',
        };

        throw new Error('File missing');
      }

      bh.local.uploadedFile = uploadedFile;

      console.log('Uploaded File >>> ', uploadedFile);

      this.tracerService.sendData(spanInst, bh);

      bh = await this.callUploaderService(bh, parentSpanInst);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PdQfdRcVM9YGhLkv',
        spanInst,
        'validateRequest'
      );
    }
  }

  async callUploaderService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callUploaderService',
      parentSpanInst
    );

    try {
      const SSD_SERVICE_ID_sd_tcVkMN53BjepuYrDInstance: SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD.mediaController =
        SSD_SERVICE_ID_sd_tcVkMN53BjepuYrD.mediaController.getInstance();

      let outputVariables =
        await SSD_SERVICE_ID_sd_tcVkMN53BjepuYrDInstance.uploader(
          spanInst,
          bh.local.uploadedFile
        );

      bh.local.uploadResult = outputVariables;

      this.tracerService.sendData(spanInst, bh);

      bh = await this.formatResponse(bh, parentSpanInst);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eLLIPAe1vTvkT1Cb',
        spanInst,
        'callUploaderService'
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

        message: 'Document uploaded successfully',

        data: bh.local.uploadResult,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_qoYqXzkDPpO5L9SE(bh, parentSpanInst);
      //appendnew_next_formatResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1oh8WwoNOdGPohGK',
        spanInst,
        'formatResponse'
      );
    }
  }

  async sd_qoYqXzkDPpO5L9SE(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qoYqXzkDPpO5L9SE');
    }
  }

  async sd_jivdFNE9Jxw93Xj6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jivdFNE9Jxw93Xj6',
      parentSpanInst
    );

    try {
      bh.output = {
        success: false,
        statusCode: bh.input.error?.statusCode || 500,
        message: bh.input.error?.message || 'Something went wrong',
      };

      this.tracerService.sendData(spanInst, bh);

      await this.sd_vwxK9AvXrPjLXGgx(bh, parentSpanInst);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jivdFNE9Jxw93Xj6',
        spanInst,
        'sd_jivdFNE9Jxw93Xj6'
      );
    }
  }

  async sd_vwxK9AvXrPjLXGgx(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.output);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vwxK9AvXrPjLXGgx');
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
    const catchConnectedNodes = ['sd_jivdFNE9Jxw93Xj6', 'sd_vwxK9AvXrPjLXGgx'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_jivdFNE9Jxw93Xj6(bh, parentSpanInst);
    //appendnew_next_tryCatch
    return true;
  }
  //appendnew_flow_upload_doc_Catch
}
