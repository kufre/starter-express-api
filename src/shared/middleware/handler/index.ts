import { NextFunction, Request, Response } from 'express';
import * as AppConfig from '../../../configs/app';
import Logger from '../../../utils/logger';

type ResponseType = {
    message?: string;
};

function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const response: ResponseType = {};
    if (err.message) {
        const logs = {
            type: err.name,
            message: err.message,
            method: req.method,
            path: req.path,
            params: req.route.path,
            body: req.body,
            query: req.query,
            stack: err.stack
        };
        Logger.error(JSON.stringify(logs));
        response.message = AppConfig.enviroment == "development" ? err.message : 'Something wrong!';
    }

    res.status(422).send(response);
}

export default errorHandler;
