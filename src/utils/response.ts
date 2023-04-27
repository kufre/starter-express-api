import * as httpStatus from 'http-status-codes'
import {Response} from 'express'

type DataResponse = { data?: object, errors?: object | boolean, message: string };
type SuccessParams = { response: Response, data?: object, message?: string };
type ErrorParams = { response: Response, errors?: object | boolean, message?: string };


// export interface TransformResponse {
//   errors: number;
//   message: string;
//   data?: any;
// }

function formatResponse(params: DataResponse) {
  const { data, errors = false, message } = params;
  return {
    data,
    errors,
    message,
  };
}
  

export class HttpStatusCode {
  static OK(params: SuccessParams) {
    const { message= "Request Successful", data, response } = params;
    const responseDetails = formatResponse({ data, message });
    return response.status(httpStatus.StatusCodes.OK).send(responseDetails);
  }

  static CREATED(params: SuccessParams) {
    const { message= "Request Successful", data, response } = params;
    const responseDetails = formatResponse({ data, message });
    return response.status(httpStatus.StatusCodes.CREATED).send(responseDetails);
  }

  static UNPROCESSABLE_ENTITY(params: ErrorParams) {
    const { message = 'Request failed', errors, response } = params;
    const responseDetails = formatResponse({ errors, message });
    return response.status(httpStatus.StatusCodes.UNPROCESSABLE_ENTITY).send(responseDetails);
  }

  static INVALID_REQUEST(params: ErrorParams) {
    const { message = 'Request failed', errors, response } = params;
    const responseDetails = formatResponse({ errors, message });
    return response.status(httpStatus.StatusCodes.BAD_REQUEST).send(responseDetails);
  }

  static UNAUTHORIZED(params: ErrorParams) {
    const { message = 'Request failed', errors, response } = params;
    const responseDetails = formatResponse({ errors: true, message });
    return response.status(httpStatus.StatusCodes.UNAUTHORIZED).send(responseDetails);
  }

  static FORBIDDEN(params: ErrorParams) {
    const { message = 'Request failed', errors = true, response } = params;
    const responseDetails = formatResponse({ errors: true, message });
    return response.status(httpStatus.StatusCodes.FORBIDDEN).send(responseDetails);
  }
}


export default HttpStatusCode;