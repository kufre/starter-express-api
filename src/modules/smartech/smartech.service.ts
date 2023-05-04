
import axios from "axios";
import { IFormData } from "./dto.smartech";

class SmartechService
{
    public PostBlueblossomCampaign  = async (requestData:IFormData): Promise<any> => {
        const data = this.FormatePostData(requestData)
        const config = this.AxiosConfig(data);
        try {
            const res = await axios.request(config);
            return {is_success:true,message:'success'}
        } catch (error) {
            const {message} = error
            return {is_success:false,message}
        }
      
    }
    private FormatePostData = (formInfo:IFormData) =>
    {
        const postData ={emai:formInfo.EmailAddress,...formInfo}
        delete postData.EmailAddress;
        const {EmailAddress,Activite_Name,...other} = postData
        const data = JSON.stringify([{
            asset_id:`${process.env.SMARTECH_ASSET_KEY}`,
            activity_name: `${postData.Activite_Name}`,
            timestamp: new Date().toISOString(),
            identity:`${postData.emai}`,
            activity_source:"web",
            activity_params:{ ...other}}]);
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

// var qs = require("querystring");
// var http = require("http");

// var options = {
//   "method": "POST",
//   "hostname": "api.netcoresmartech.com",
//   "port": null,
//   "path": "/apiv2",
//   "headers": {
//     "content-type": "application/x-www-form-urlencoded"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(qs.stringify(
//     { apikey: undefined,
//   type: 'contact',
//   activity: 'add',
//   data: undefined,
//   listid: undefined }
//   ));
// req.end();


// curl --request POST \
// --url http://api.netcoresmartech.com/apiv2 \
// --header 'content-type: application/x-www-form-urlencoded' \
// --data 'apikey=430473d191963439bf5184a9f3daf901&type=contact&activity=add&data={"CUSTOMERID": "290200000098", "EMAIL": "ruwadone@ipnxnigeria.net","NAME": "Emmanuel Uwadone", "PLAN": "Advantage Preferred","AMOUNT": 26250, "DUE_DATE": "30-10-2019", "DATE_ORDER": "30-09-2019"}&listid=6'

// import qs from 'qs';
// const data = { 'bar': 123 };
// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };
// axios(options);