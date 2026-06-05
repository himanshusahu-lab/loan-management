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
import * as SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw from '../reelsCOntroller/validationController'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class validation {
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
    this.serviceName = 'validation';
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
      instance = new validation(
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
    //appendnew_flow_validation_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: validation');
    //appendnew_flow_validation_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: validation');

    this.app['post'](
      `${this.serviceBasePath}/reelscalc`,
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
          bh = await this.sd_qEwoBu3sw1qNt4V3(bh, parentSpanInst);
          //appendnew_next_sd_ikepfUHC03kdUp9B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ikepfUHC03kdUp9B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_validation_HttpIn
  }
  //   service flows_validation

  //appendnew_flow_validation_start

  async sd_qEwoBu3sw1qNt4V3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qEwoBu3sw1qNt4V3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVwInstance: SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw.validationController =
        SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVw.validationController.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_tYi8MoyRgBjSCqVwInstance.validationController(
          spanInst,
          bh.input.body
        );
      bh.local.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.out(bh, parentSpanInst);
      //appendnew_next_sd_qEwoBu3sw1qNt4V3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qEwoBu3sw1qNt4V3',
        spanInst,
        'sd_qEwoBu3sw1qNt4V3'
      );
    }
  }

  async out(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_roSGgNAv7FysT5Lr');
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
  //appendnew_flow_validation_Catch
}
