import smartechService from './smartech.service'
import { IFormData } from './dto.smartech';

class SmartechHookController {
    public SubmitForm = async (req,res) => {
        try {
            const {...info}:IFormData = req.body;
            info.Activite_Name ="blueblossom_campaign";
           const {is_success,message}:any = await smartechService.PostBlueblossomCampaign(info);
           if(!is_success)
           {
            return res.status(400).json({message});
           }
           return res.status(201).json({message});
          
        } catch (error) {
            const {message} =error;
            return res.status(400).json({message});
        }
    }
}
export default new SmartechHookController();