import { NextFunction, Request, Response } from 'express';
import smartechService from './smartech.service'
import { IFormData } from './dto.smartech';

class SmartechHookController {
    async hook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const {...data}:IFormData = req.body;
            data.Activite_Name ="blueblossom_campaign";
            await smartechService.PostBlueblossomCampaign(data);
            res.status(200);
        } catch (error) {
            next(error);
        }
    }
}
export default new SmartechHookController();