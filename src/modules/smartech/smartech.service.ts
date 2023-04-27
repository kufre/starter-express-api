
import axios from "axios";
import { IFormData } from "./dto.smartech";

class SmartechService
{
    public PostBlueblossomCampaign  = async (requestData:IFormData) : Promise<void> => {
        const data = this.FormatePostData(requestData)
        const config = this.AxiosConfig(data);
        axios.request(config).then((response) => {
        console.log(JSON.stringify(response.data));

        })
        .catch((error) => {
        console.log(error);
        });
    }
    private FormatePostData = (formInfo:IFormData) =>
    {
        const postData ={
            emai:formInfo.EmailAddress,
            ...formInfo
        }
        delete postData.EmailAddress;
        const {EmailAddress,Activite_Name,...other} = postData
        const data = JSON.stringify([{
            asset_id:`${process.env.SMARTECH_ASSET_KEY}`,
            activity_name: `${postData.Activite_Name}`,
            timestamp: new Date().toISOString(),
            identity:`${postData.emai}`,
            activity_source:"web",
            activity_params:{
                ...other
            },}]);
     
        return data
    }
    private AxiosConfig = (data:any) => 
    {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api2.netcoresmartech.com/v1/activity/upload',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.SMARTECH_API_KEY}`},
            data : data
        };

        return config;
    }
}

export default new SmartechService();