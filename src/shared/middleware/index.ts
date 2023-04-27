import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import * as AppConfig from '../../configs/app'
import { Application } from 'express'
import { specs } from '../../configs/swagger';
import errorHandler from '../middleware/handler/index'
import MorganMiddleware from '../middleware/logger' 
import routesV1 from '../routes/api.route' 
import  authMiddle from '../middleware/auth/index'

export function createServer(app): Application {
    
    const corsOption = {
        origin: '*',
        credentials: true
    };
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors(corsOption));
    app.use(compression());
    app.use(MorganMiddleware);
    authMiddle(app);
    app.use(`/api/${AppConfig.apiVersion}`, routesV1);
    // if (AppConfig.enviroment == "development") {
    //     app.use(
    //         `/docs/${AppConfig.apiVersion}`,
    //         swaggerUi.serve,
    //         swaggerUi.setup(specs)
    //     );
    // }
    app.use(errorHandler);
    return app;
}