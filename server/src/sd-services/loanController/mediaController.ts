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
import { FileOutService } from '../../utils/ndefault-file/FileOut/FileOutService'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class mediaController {
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
    this.serviceName = 'mediaController';
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
      instance = new mediaController(
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
    //appendnew_flow_mediaController_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: mediaController');
    //appendnew_flow_mediaController_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: mediaController');
    //appendnew_flow_mediaController_HttpIn
  }
  //   service flows_mediaController

  async uploader(parentSpanInst, file: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('uploader', parentSpanInst);
    let bh: any = {
      input: {
        file,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VMSB8u6HJpu2iG0d(bh, parentSpanInst);
      //appendnew_next_uploader
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXhev291oGWiJdMr',
        spanInst,
        'uploader'
      );
    }
  }
  //appendnew_flow_mediaController_start

  async sd_VMSB8u6HJpu2iG0d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VMSB8u6HJpu2iG0d',
      parentSpanInst
    );
    try {
      const uploadedFile = bh.input.file;

      if (!uploadedFile) {
        bh.input.error = {
          statusCode: 400,

          message: 'Uploaded file missing',
        };

        throw new Error('Uploaded file missing');
      }

      const fileName = `${Date.now()}_${uploadedFile.originalname}`;

      const filePath = `./uploads/${fileName}`;

      bh.local.fileName = fileName;

      bh.local.filePath = filePath;

      bh.local.fileBuffer = uploadedFile.buffer;

      console.log('FILE NAME:', fileName);

      console.log('FILE PATH:', filePath);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.saveLoanDocument(bh, parentSpanInst);
      //appendnew_next_sd_VMSB8u6HJpu2iG0d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VMSB8u6HJpu2iG0d',
        spanInst,
        'sd_VMSB8u6HJpu2iG0d'
      );
    }
  }

  async saveLoanDocument(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'saveLoanDocument',
      parentSpanInst
    );
    try {
      let fileOutService = FileOutService.getInstance();
      await fileOutService.fileOut({
        filepath: bh.local.filePath,
        payload: bh.local.fileBuffer,
        createDir: true,
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.formatResponse(bh, parentSpanInst);
      //appendnew_next_saveLoanDocument
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7QGAI6iGuanm0UPg',
        spanInst,
        'saveLoanDocument'
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

        message: 'File uploaded successfully',

        file_name: bh.local.fileName,

        file_path: bh.local.filePath,
      };

      this.tracerService.sendData(spanInst, bh);
      this.sd_qmCGeMMdWsrNFdeP(bh, parentSpanInst);
      //appendnew_next_formatResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eE0VAEoiDUexhscg',
        spanInst,
        'formatResponse'
      );
    }
  }

  async sd_qmCGeMMdWsrNFdeP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qmCGeMMdWsrNFdeP',
      parentSpanInst
    );
    try {
      let logobj: any = bh.output;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qmCGeMMdWsrNFdeP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qmCGeMMdWsrNFdeP',
        spanInst,
        'sd_qmCGeMMdWsrNFdeP'
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
  //appendnew_flow_mediaController_Catch
}
