import { NextFunction, Request, Response } from 'express';

class HealthCheckController {
    async status(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
           
            res.status(200).send({
                message: 'ok'
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new HealthCheckController();