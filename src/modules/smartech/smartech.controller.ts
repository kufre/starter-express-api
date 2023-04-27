import { NextFunction, Request, Response } from 'express';
import smartechService from './smartech.service'
import { IFormData } from './dto.smartech';

class SmartechHookController {
    async hook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const {...info}:IFormData = req.body;
            info.Activite_Name ="blueblossom_campaign";
           const {is_success,data,message}:any = await smartechService.PostBlueblossomCampaign(info);
           if(is_success)
           {
            return res.status(200);
           }
           return res.status(200).json({message});
            
        } catch (error) {
            next(error);
        }
    }
}
export default new SmartechHookController();