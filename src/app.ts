
import Logger from './utils/logger';
import * as express from 'express';
import * as http  from 'http';
import {createServer} from './shared/middleware';
import * as AppConfig from './configs/app';


const app = express();
var httpServer = http.createServer(createServer(app));
const PORT = AppConfig.apiPort;
export function startServer():void {

    httpServer.listen(PORT, () => {
        Logger.debug(`App ${AppConfig.appName} with api version ${AppConfig.apiVersion} is starting`);
        Logger.debug(`App is listening on port ${PORT}`);
    });
}

